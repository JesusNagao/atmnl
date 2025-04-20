import React from 'react';
import './Footer.css';



const Footer = () => {
  return (
    <footer className="footer">
      <div className="max-width-container">
        <div className="footer-content">
          <div className="footer-grid">
            <div className="footer-section">
              <h3 className="footer-title">© 2025 Asociación de Tenis de Mesa de Nuevo León</h3>
              <p className="footer-description">
                The most comprehensive and up-to-date table tennis rankings for all categories.
              </p>
            </div>
            <div className="footer-section">
              <h3 className="footer-title">Quick Links</h3>
              <ul className="footer-links-list">
                <li className="footer-link-item"><a href="/federacion" className="footer-link">Federación</a></li>
                <li className="footer-link-item"><a href="/ranking" className="footer-link">Rankings</a></li>
                {/*<li className="footer-link-item"><a href="#" className="footer-link">News</a></li>
                <li className="footer-link-item"><a href="#" className="footer-link">Players</a></li>*/}
                <li className="footer-link-item"><a href="/calendario" className="footer-link">Eventos</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h3 className="footer-title">Connect With Us</h3>
              <ul className="footer-links-list">
                <li className="footer-link-item"><button className="event-details-button" onClick={() => window.location.href = "https://www.facebook.com/asociaciondetenisdemasedenuevoleon"}>Facebook</button></li>
                <li className="footer-link-item"><button className="event-details-button" onClick={() => window.location.href = "https://www.facebook.com/asociaciondetenisdemasedenuevoleon"}>Facebook</button></li>
                <li className="footer-link-item"><button className="event-details-button" onClick={() => window.location.href = "https://www.facebook.com/asociaciondetenisdemasedenuevoleon"}>Facebook</button></li>
                <li className="footer-link-item"><button className="event-details-button" onClick={() => window.location.href = "https://www.facebook.com/asociaciondetenisdemasedenuevoleon"}>Facebook</button></li>
              </ul>
            </div>
          </div>
          <div className="footer-divider">
            <p>&copy; 2025 Table Tennis Rankings. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
