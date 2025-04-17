// MainPage.jsx
import React from 'react';
import "styles/MainPage.css";
import News from 'components/DynamicComponents/News/News';
import Ranking from 'components/DynamicComponents/Ranking/Ranking-module';
import Videos from 'components/DynamicComponents/Videos/Videos';
import Calendar from 'components/DynamicComponents/Calendar/EventsCalendar';
//import Contact from 'components/DynamicComponents/Contact/Contact';
import IntroBanner from "components/DynamicComponents/IntroBanner/IntroBanner";
import Footer from "components/StaticComponents/Footer/Footer";

export default function MainPage() {
  return (
    <div className="mainpage">
      <IntroBanner />
      
      <div className="container">
        <section className="section">
          <div className="section-header">
            <h2>Últimas Noticias</h2>
            <a href="/noticias" className="section-view-all">Ver todas</a>
          </div>
          <News />
        </section>
        
        <section className="section">
          <div className="section-header">
            <h2>Ranking</h2>
            <a href="/ranking" className="section-view-all">Ver completo</a>
          </div>
          <Ranking />
        </section>
        
        <section className="section">
          <div className="section-header">
            <h2>Próximos Eventos</h2>
            <a href="/calendario" className="section-view-all">Ver calendario</a>
          </div>
          <Calendar />
        </section>
        
        <section className="section">
          <div className="section-header">
            <h2>Últimos Videos</h2>
            <a href="/videos" className="section-view-all">Ver todos</a>
          </div>
          <Videos />
        </section>
        
        <section className="section">
          <div className="section-header">
            <h2>Contáctanos</h2>
          </div>
          {/*<Contact />*/}
        </section>
      </div>
    </div>
  );
}