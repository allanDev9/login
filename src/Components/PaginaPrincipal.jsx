import './css/PaginaPrincipal.css';
import { RoutesLinks } from './RoutesLinks';

export function PaginaPrincipal({ user}) {

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
      
    const avatarUrl = `data:image/svg+xml;base64,${btoa(generateAvatarSVG())}`;


    return (
        <section className='Container'>
            <div className='sidebar'>
                <img className='ImagenMidu'
                    style={{ width: 70, height: 70, borderRadius: 999 }} 
                    src={avatarUrl} 
                    alt="Foto de perfil" 
                />
                <h2 className='titlePerfil'>{user || 'Usuario'}</h2>
                <RoutesLinks/>
            </div>
        </section>
    );
}
