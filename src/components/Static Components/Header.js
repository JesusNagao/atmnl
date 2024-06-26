import React from 'react';
import './Header.css';
import BurgerButton from './BurgerButton';
import Login from '../Dynamic Components/Login'


export default function Header() {

    function getNews(){
        fetch('http://localhost:3000/news').then(() => {
            console.log("News Received")
            //setmsg("News Received")
            //setIsPending(false);
        })
    }


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
                    <a className='Nav'>Acerca de Nosotros</a> {/*Es una de las pestañas más importantes para este sprint*/}
                    <a className='Nav' onClick={getNews}>Ultimas Noticias</a> {/*Es una de las pestañas más importantes para este sprint*/}
                    <a href="/Calendario" className='Nav'>Calendario</a> {/*Es una de las pestañas más importantes para este sprint*/}
                    <a href="/Ranking" className='Nav'>Ranking</a> {/*Es una de las pestañas más importantes para este sprint*/}
                    <a href="/eventos" className='Nav'>Eventos</a> {/*Es una de las pestañas más importantes para este sprint*/}
                   
                    {/* Más elementos de menú según sea necesario, posiblemente necesario*/}
                </div>  
                <Login className = 'Nav'/>
                <div className='burger'>
                    <BurgerButton/>
                </div>
            </div>
        </div>
       
    );
}
