import React from 'react';
import './Header.css';

export default function Header(){
    return( 
        <div className='header-background'>
            <img className='ATMNL_Logo' src = "/images/AT.png" alt = "ATMNL Logo"></img>
            <div className='header-content'>
                <h1 className='header-title'>Asociacion de Tenis de Mesa de Nuevo Leon</h1>
                <div className='header-nav'>
                    <a href="/hello" className='Nav'>Acerca de Nosotros</a> {/*Es una de las pestañas más importantes para este sprint*/}
                    <a href="/noticias" className='Nav'>Ultimas Noticias</a> {/*Es una de las pestañas más importantes para este sprint*/}
                    <a href="/Calendario" className='Nav'>Calendario</a> {/*Es una de las pestañas más importantes para este sprint*/}
                    <a href="/Ranking" className='Nav'>Eventos</a> {/*Es una de las pestañas más importantes para este sprint*/}
                    <a href="/eventos" className='Nav'>Eventos</a> {/*Es una de las pestañas más importantes para este sprint*/}
                    <form action='/newUser' method='post'>
                        <input type='submit' value='Nosotrs'/>
                    </form>
                    {/* Más elementos de menú según sea necesario, posiblemente necesario*/}
                </div>
            </div>
        </div>
    );
}
