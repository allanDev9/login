import { useState } from 'react';
import './css/PaginaPrincipal.css'
import { Home } from './Home.jsx';
import { Estadisticas } from './Estadisticas.jsx';
import { Ayuda } from './Ayuda.jsx';
import { Configuracion } from './Configuracion.jsx';
import { IoHome } from "react-icons/io5";
import { MdAnalytics } from "react-icons/md";
import { IoIosHelpCircle } from "react-icons/io";
import { IoIosSettings } from "react-icons/io";
import { MdLogout } from "react-icons/md";
import { AiOutlineLeft } from "react-icons/ai";
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'; 

export function RoutesLinks({ setUser }){

    const [isOpen, setIsOpen] = useState(true);
    const [activeSection, setActiveSection] = useState('home');

    const handleLogout = () => {
        setUser([]);
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return(
        <div className='container'>
        <BrowserRouter>
                    <nav className={`MenuItems ${isOpen ? 'open' : ''}`}>
                        <ul>
                            <li className={activeSection === 'home' ? 'selected' : ''}>
                                <IoHome className='Icono' style={{ marginRight: 10 }} />
                                <span>
                                    <Link 
                                        style={{ color: 'white' }} 
                                        to='/home'
                                        onClick={() => setActiveSection('home')}
                                    >
                                        Home
                                    </Link>
                                </span>
                            </li>
                            <li className={activeSection === 'estadisticas' ? 'selected' : ''}>
                                <MdAnalytics className='Icono' style={{ marginRight: 10 }} />
                                <span>
                                    <Link 
                                        style={{ color: 'white' }} 
                                        to='/estadisticas'
                                        onClick={() => setActiveSection('estadisticas')}
                                    >
                                        Estadísticas
                                    </Link>
                                </span>
                            </li>
                            <li className={activeSection === 'ayuda' ? 'selected' : ''}>
                                <IoIosHelpCircle style={{ marginRight: 10 }} />
                                <span>
                                    <Link 
                                        style={{ color: 'white' }} 
                                        to='/ayuda'
                                        onClick={() => setActiveSection('ayuda')}
                                    >
                                        Ayuda
                                    </Link>
                                </span>
                            </li>
                        </ul>

                        <hr className='separador' />
                        
                        <ul className="secundaryLinks">
                            <li className={activeSection === 'configuracion' ? 'selected' : ''} style={{position: 'relative', top: '305px'}}>
                                <IoIosSettings style={{ marginRight: 10 }} />
                                <span>
                                    <Link 
                                        style={{ color: 'white' }} 
                                        to='/configuracion'
                                        onClick={() => setActiveSection('configuracion')}
                                    >
                                        Configuración
                                    </Link>                            
                                </span>
                            </li>
                            <li style={{position: 'absolute', top: '75%'}}>
                                <MdLogout style={{ marginRight: 10 }} /> 
                                <span>   
                                    <Link onClick={handleLogout} style={{ color: 'white' }} to="/cerrarSesion">
                                        Cerrar Sesión
                                    </Link>
                                </span>
                            </li>
                        </ul>
                    </nav>
                    
                    <div className="main-content">
                        <Routes>
                            <Route path='/home' element={<Home />} />
                            <Route path='/estadisticas' element={<Estadisticas />} />
                            <Route path='/ayuda' element={<Ayuda />} />
                            <Route path='/configuracion' element={<Configuracion />} />
                        </Routes>
                    </div>
                </BrowserRouter>
                <div className={`Menu ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <AiOutlineLeft />
                </div>
            </div>               
    )
}