import React from 'react';
import './Header.css';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();

  return (
    <header className="Header">
      <div className="TopHeader">
        <h1>ASOCIACIÓN DE TENIS DE MESA DE NUEVO LEÓN</h1>
        <div className="mediaLinks">
          <a className="IconBtn" href="https://www.facebook.com/asociaciondetenisdemesadenuevoleon" target="_blank" rel="noopener noreferrer">
            <img className="icon" src="./images/Facebook.png" alt="facebook" />
          </a>
          <a className="IconBtn" href="https://www.instagram.com/atm_nl/" target="_blank" rel="noopener noreferrer">
            <img className="icon" src="./images/Instagram.png" alt="instagram" />
          </a>
          <a className="IconBtn" href="https://www.instagram.com/atm_nl/" target="_blank" rel="noopener noreferrer">
            <img className="icon" src="./images/twitter-x.png" alt="twitterX" />
          </a>
          <a className="IconBtn" href="https://www.youtube.com/@LRTMNL" target="_blank" rel="noopener noreferrer">
            <img className="icon" src="./images/Youtube.png" alt="youtube" />
          </a>
        </div>
      </div>

      <div className="LowHeader">
        <Link to="/">
          <img className="ATMNL_Logo" src="./images/AT.png" alt="ATMNL logo" />
        </Link>
        <nav className="header-nav">
          <Link to="/federacion" className={location.pathname === '/federacion' ? 'Nav active' : 'Nav'}>Federación</Link>
          <Link to="/calendario" className={location.pathname === '/calendario' ? 'Nav active' : 'Nav'}>Calendario</Link>
          <Link to="/ranking" className={location.pathname === '/ranking' ? 'Nav active' : 'Nav'}>Ranking</Link>
        </nav>
      </div>
    </header>
  );
}
