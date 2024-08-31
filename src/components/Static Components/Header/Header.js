import React from 'react';
import './Header.css';
//import BurgerButton from '../BurgerButton';
//import Login from '../Dynamic Components/Login'


export default function Header() {


    return (
        <div className='Header'>
            <div className='TopHeader'>
                <h1>ASOCIACION DE TENIS DE MESA DE NUEVO LEON</h1>
                <div className='mediaLinks'>
                    <a className="IconBtn" href="https://www.facebook.com/asociaciondetenisdemesadenuevoleon"><img className='icon' src='./images/Facebook.png' alt='facebook.png'/></a>
                    <a className="IconBtn" href="https://www.instagram.com/atm_nl/"><img className='icon' src='./images/Instagram.png' alt='instagram.png'/></a>
                    <a className="IconBtn" href="https://www.instagram.com/atm_nl/"><img className='icon' src='./images/twitter-x.png' alt='twitterX.png'/></a>
                    <a className="IconBtn" href="https://www.youtube.com/@LRTMNL"><img className='icon' src='./images/Youtube.png' alt='youtube.png'/></a>
                </div>


            </div>
            <div className='LowHeader'>
                <a href="/">
                    <img href="/App.js" className='ATMNL_Logo' src='./images/AT.png' alt='atmnl.png'/>
                </a>
                <div className='header-nav'>
                    <a href='/Acerca' className='Nav'>Acerca de Nosotros</a>
                    <a href="/Calendario" className='Nav'>Calendario</a>
                    <a href="/Ranking" className='Nav'>Ranking</a> 
                </div>  
                {/*<Login className = 'Nav'/>
                <div className='burger'>
                    <BurgerButton/>
                </div>*/}
            </div>
        </div>
       
    );
}
