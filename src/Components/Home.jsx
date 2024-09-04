import { useState } from 'react';
import './css/Home.css';
import { AiOutlineLeft } from "react-icons/ai";
import { IoHome } from "react-icons/io5";
import { MdAnalytics } from "react-icons/md";
import { IoIosHelpCircle } from "react-icons/io";
import { IoIosSettings } from "react-icons/io";
import { MdLogout } from "react-icons/md";

export function Home({ user, setUser }) {
    const [isOpen, setIsOpen] = useState(true);
    const [activeSection, setActiveSection] = useState('home');

    const generateAvatarSVG = () => {
        const colors = ['black'];
        const isColor = colors[colors.length];
      
        return `
          <svg width="70" height="70" xmlns="http://www.w3.org/2000/svg">
            <rect width="70" height="70" fill="${isColor}" />
            <text x="35" y="40" font-size="15" text-anchor="middle" fill="#FFF">${user ? user[0].toUpperCase() : '?'}</text>
          </svg>
        `;
      };
      
      // Convertir SVG a base64
      const avatarUrl = `data:image/svg+xml;base64,${btoa(generateAvatarSVG())}`;

    const handleLogout = () => {
        if (confirm('Seguro que quieres cerrar sesión?')) {
            setUser([]);
        }
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const renderContent = () => {
        switch (activeSection) {
            case 'home':
                return <div><h3 style={{ position: 'absolute', top: '2%', left: '2%'}}>Home</h3></div>;
            case 'estadisticas':
                return <div><h3 style={{ position: 'absolute', top: '2%', left: '2%'}}>Estadísticas</h3></div>;
            case 'ayuda':
                return <div><h3 style={{ position: 'absolute', top: '2%', left: '2%'}}>Ayuda</h3></div>;
            case 'configuracion':
                return <div><h3 style={{ position: 'absolute', top: '2%', left: '2%'}}>Configuracion</h3></div>;
            default:
                return null;
        }
    };

    return (
        <section className='Container'>
            <div className='sidebar'>
                <img className='ImagenMidu'
                    style={{ width: 70, height: 70, borderRadius: 999 }} 
                    src={avatarUrl} 
                    alt="Foto de perfil" 
                />
                <h2 className='titlePerfil'>{user || 'Usuario'}</h2>
                <nav className={`MenuItems ${isOpen ? 'open' : ''}`}>
                    <ul>
                        <li className={activeSection === 'home' ? 'selected' : ''}>
                            <IoHome className='Icono'  style={{ marginRight: 10 }} />
                            <span>
                                <a 
                                style={{color: 'white'}} 
                                href='#'
                                onClick={() => setActiveSection('home')}
                                
                                >
                                    Home
                                </a>
                            </span>
                        </li>
                        <li className={activeSection === 'estadisticas' ? 'selected' : ''}>
                            <MdAnalytics className='Icono' style={{ marginRight: 10 }} />
                            <span>
                                <a 
                                style={{color: 'white'}} 
                                href='#'
                                onClick={() => setActiveSection('estadisticas')}
                                >
                                    Estadísticas
                                </a>
                            </span>
                        </li>
                        <li className={activeSection === 'ayuda' ? 'selected' : ''}>
                            <IoIosHelpCircle style={{ marginRight: 10 }} />
                            <span>
                                <a 
                                style={{color: 'white'}} 
                                href='#'
                                onClick={() => setActiveSection('ayuda')}
                                >
                                    Ayuda
                                </a>
                            </span>
                        </li>
                    </ul>

                    <hr className='separador' />
                    
                    <ul className="secundaryLinks">
                        <li className={activeSection === 'configuracion' ? 'selected' : ''} style={{position: 'relative', top: '305px'}}>
                            <IoIosSettings style={{ marginRight: 10 }}/>
                            <span>
                                <a 
                                style={{color: 'white'}} 
                                href="#"
                                onClick={() => setActiveSection('configuracion')}
                                >
                                    Configuración
                                </a>                            
                            </span>
                        </li>
                        <li style={{position: 'absolute', top: '75%'}}>
                            <MdLogout style={{ marginRight: 10 }}/> 
                            <span>   
                                <a onClick={handleLogout} style={{color: 'white' }} href="#">
                                    Cerrar Sesión
                                </a>
                            </span>
                        </li>
                    </ul>
                </nav>
                <div className={`Menu ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <AiOutlineLeft />
                </div>

                <div className="main-content">
                    {renderContent()}
                </div>
                
            </div>
        </section>
    );
}

