import { useState } from 'react'
import './css/Home.css'
import midudev from './img/Imagen anonima.webp'
import { IoMdMenu } from "react-icons/io"
import { IoHome } from "react-icons/io5";

export function Home ({user, setUser}){

    const [isOpen, setIsOpen] = useState(false)

    const handleLogout = () => {
        setUser([])
    } 
    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }
    return(
        <section>
            <div>
                <img className='ImagenMidu'
                style={{width: 70, height: 70, borderRadius: 999}} 
                src={midudev} 
                alt="Imagen de midudev" 
                />
                <h2 className='titlePerfil'>Foto de {user}</h2>
                {isOpen && (
                <nav className="MenuItems open">
                    <ul>
                     <li>
                        <IoHome style={{marginRight: 10 }}/>
                        Home
                        </li>
                     <li>
                        <IoHome style={{marginRight: 10 }}/>
                        Contacts
                    </li>
                    
                     <li>
                        <IoHome style={{marginRight: 10 }}/>
                        Ayuda
                    </li>
                    </ul>
                </nav>
                )}
                <div className={`Menu ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <IoMdMenu/>
                </div>
            </div>
        
            <h1 style={{color: 'white'}}>Bienvenido</h1>
            <h2 style={{color: 'white'}}>{user}</h2>
            <button className="btnLogout" 
            onClick={handleLogout}>
            Cerrar Sesión
            </button>
        </section>
    )
}