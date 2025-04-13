import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className='Header'>
      <div className='TopHeader'>
        <h1>ASOCIACION DE TENIS DE MESA DE NUEVO LEON</h1>
        <div className='mediaLinks'>
          <a className="IconBtn" href="https://www.facebook.com/asociaciondetenisdemesadenuevoleon" target="_blank" rel="noopener noreferrer">
            <img className='icon' src='./images/Facebook.png' alt='facebook'/>
          </a>
          <a className="IconBtn" href="https://www.instagram.com/atm_nl/" target="_blank" rel="noopener noreferrer">
            <img className='icon' src='./images/Instagram.png' alt='instagram'/>
          </a>
          <a className="IconBtn" href="https://www.instagram.com/atm_nl/" target="_blank" rel="noopener noreferrer">
            <img className='icon' src='./images/twitter-x.png' alt='twitterX'/>
          </a>
          <a className="IconBtn" href="https://www.youtube.com/@LRTMNL" target="_blank" rel="noopener noreferrer">
            <img className='icon' src='./images/Youtube.png' alt='youtube'/>
          </a>
        </div>
      </div>

      <div className='LowHeader'>
        <Link to="/">
          <img className='ATMNL_Logo' src='./images/AT.png' alt='ATMNL logo'/>
        </Link>
        <div className='header-nav'>
          <Link to="/federacion" className='Nav'>Federation</Link>
          <Link to="/calendario" className='Nav'>Calendar</Link>
          <Link to="/ranking" className='Nav'>Ranking</Link>
        </div>
      </div>
    </div>
  );
}
