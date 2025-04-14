import React from 'react';
import { Award, School, Users, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './landing-styles.css';
import ImgRnkNac from '../../../assets/Imagenes-SeleccionNacional.jpg';
import ImgRnkBorregos from '../../../assets/Imagenes_CircuitoBorregos.jpeg';

export default function LandingPage() {
  return (
    <div className="landing-page">
      <main className="landing-main">
        <div className="max-width-container">
          <div className="hero-section">
            <h1 className="hero-title">Table Tennis Rankings</h1>
            <p className="hero-subtitle">
              Choose the rating system you want to explore
            </p>
          </div>

          <div className="rating-options">
            <Link to="/ranking" className="rating-card">
              <div className="rating-card-content">
                <div className="rating-card-icon-container national">
                  <Users className="rating-card-icon" />
                </div>
                <div className="rating-card-text">
                  <h2 className="rating-card-title">National Rating</h2>
                  <p className="rating-card-description">
                    View the official national rankings for all categories across Mexico
                  </p>
                  <div className="rating-card-info">
                    <ul className="rating-card-features">
                      <li className="rating-card-feature">Updated monthly</li>
                      <li className="rating-card-feature">All age categories</li>
                      <li className="rating-card-feature">Men's and Women's divisions</li>
                    </ul>
                  </div>
                  <div className="rating-card-action">
                    <span className="button-text">View National Rankings</span>
                    <ChevronRight className="rating-card-action-icon" />
                  </div>
                </div>
              </div>
              <div className="rating-card-image-container">
                <img src={ImgRnkNac} alt="National Rating" className="rating-card-image" />
              </div>
            </Link>

            <Link to="/ranking" className="rating-card">
              <div className="rating-card-content">
                <div className="rating-card-icon-container borregos">
                  <School className="rating-card-icon" />
                </div>
                <div className="rating-card-text">
                  <h2 className="rating-card-title">Circuito Borregos Rating</h2>
                  <p className="rating-card-description">
                    Explore the collegiate tournament circuit rankings and statistics
                  </p>
                  <div className="rating-card-info">
                    <ul className="rating-card-features">
                      <li className="rating-card-feature">Tournament-based rankings</li>
                      <li className="rating-card-feature">University and college players</li>
                      <li className="rating-card-feature">Seasonal data available</li>
                    </ul>
                  </div>
                  <div className="rating-card-action">
                    <span className="button-text">View Circuito Borregos Rankings</span>
                    <ChevronRight className="rating-card-action-icon" />
                  </div>
                </div>
              </div>
              <div className="rating-card-image-container">
                <img src={ImgRnkBorregos} alt="Circuito Borregos Rating" className="rating-card-image" />
              </div>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}