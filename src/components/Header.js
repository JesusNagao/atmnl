import React from 'react';
import './Header.css';
import logo_atmnl from '../assets/logo_atmnl.jpg'

export default function Header(){
    return( 
        <div className='header'>
            <img className='logo' src= {logo_atmnl} />
            <h1 className='header-title'>Asociacion de</h1>
            <h1 className='header-title'>Tenis de Mesa</h1>
            <h1 className='header-title'>de Nuevo Leon</h1>
            <input className='register' type='button' value='Registrarse'/>
            <input className='login' type='button' value='Iniciar Sesión'/>
        </div>
    );
}
