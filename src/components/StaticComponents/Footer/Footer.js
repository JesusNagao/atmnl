import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-title">© 2025 Asociación de Tenis de Mesa de Nuevo León</p>
        <div className="footer-links">
          <a href="/federacion" className="footer-link">Federation</a>
          <a href="/calendario" className="footer-link">Calendar</a>
          <a href="/ranking" className="footer-link">Ranking</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
