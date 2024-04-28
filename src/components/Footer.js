import React from 'react';
import './Footer.css';

export default function Footer(){
    return( 
        <div className='Footer'>
            <h1 className='Footer-title'>Asociacion de Tenis de Mesa de Nuevo Leon</h1>
            <div className='Footer-content'>
                <a href="/acerca" className='Nav'>Acerca de Nosotros</a> {/*Es una de las pestañas más importantes para este sprint*/}
                <a href="/noticias" className='Nav'>Ultimas Noticias</a> {/*Es una de las pestañas más importantes para este sprint*/}
                <a href="/Calendario" className='Nav'>Calendario</a> {/*Es una de las pestañas más importantes para este sprint*/}
                <a href="/Ranking" className='Nav'>Ranking</a> {/*Es una de las pestañas más importantes para este sprint*/}
                <a href="/eventos" className='Nav'>Eventos</a> {/*Es una de las pestañas más importantes para este sprint*/}
                
                {/* Más elementos de menú según sea necesario, posiblemente necesario*/}
                <br></br>
            </div>
        </div>
    );
}
