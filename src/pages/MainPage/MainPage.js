// MainPage.jsx
import React from 'react';
import News from 'components/DynamicComponents/News/NewsSlider';
import Ranking from 'components/DynamicComponents/Ranking/Ranking-module';
import Videos from 'components/DynamicComponents/Videos/Videos';
import Calendar from 'components/DynamicComponents/Calendar/EventsCalendar';
import ContactForm from 'components/StaticComponents/MainPage/ContactForm';
import IntroBanner from "components/DynamicComponents/IntroBanner/IntroBanner";
import "styles/MainPage/MainPage.css";

export default function MainPage() {
  return (
    <div className="mainpage">
      <IntroBanner />
      
      <div className="main-container">
        
        {/* Top row - News */}
        <section className="section news-section">
        <div className="section-header">
            <h2>Últimas Noticias</h2>
            <a href="/noticias" className="section-view-all">Ver todas</a>
        </div>
        <News />
        </section>
        
        {/* Calendar Section*/}
    
        <section className="section calendar-section">
            <div className="section-header">
            <h2>Próximos Eventos</h2>
            <a href="/calendario" className="section-view-all">Ver calendario</a>
            </div>
            <Calendar />
        </section>
    
        {/* Videos section */}
        <section className="section videos-section">
            <div className="section-header">
            <h2>Últimos Videos</h2>
            <a href="/videos" className="section-view-all">Ver todos</a>
            </div>
            <Videos />
        </section>
        
        

        {/* Ranking column with ranking table */}
        <div className="ranking-column">
          <div className="section-header">
            <h2>Ranking</h2>
            <a href="/ranking" className="section-view-all">Ver completo</a>
          </div>
          <Ranking />
        </div>
      </div>
      {/* Bottom row - Contact */}
      <ContactForm className="contact-section"/>
    </div>
  );
}