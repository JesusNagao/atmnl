// News.jsx
import React, { useState, useEffect } from 'react';
import './News.css';

// This would normally be fetched from an API
const dummyNews = [
  {
    id: 1,
    title: "Torneo Estatal 2025 - Fechas confirmadas",
    date: "15/04/2025",
    summary: "La Asociación de Tenis de Mesa de Nuevo León anuncia las fechas oficiales para el Torneo Estatal 2025...",
    image: "/images/news/torneo-estatal.jpg"
  },
  {
    id: 2,
    title: "Resultados del Circuito Nacional Sub-21",
    date: "10/04/2025",
    summary: "Nuestros representantes estatales lograron destacar en el Circuito Nacional Sub-21 celebrado en Guadalajara...",
    image: "/images/news/circuito-sub21.jpg"
  },
  {
    id: 3,
    title: "Clínica de entrenamiento con el campeón nacional",
    date: "05/04/2025",
    summary: "No te pierdas la clínica especial de entrenamiento que impartirá el actual campeón nacional el próximo fin de semana...",
    image: "/images/news/clinica.jpg"
  }
];

const NewsCard = ({ title, date, summary, image }) => {
  return (
    <div className="news-card">
      <div className="news-image">
        <img src={image || "/images/news/default.jpg"} alt={title} />
      </div>
      <div className="news-content">
        <h3>{title}</h3>
        <p className="news-date">{date}</p>
        <p className="news-summary">{summary}</p>
        <a href="#" className="read-more">Leer más</a>
      </div>
    </div>
  );
};

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    // In a real app, you would fetch news from an API
    setNews(dummyNews);
  }, []);

  return (
    <div className="news-container">
      {news.slice(0, 3).map((item) => (
        <NewsCard
          key={item.id}
          title={item.title}
          date={item.date}
          summary={item.summary}
          image={item.image}
        />
      ))}
      <div className="news-view-all">
        <a href="/noticias" className="view-all-button">Ver todas las noticias</a>
      </div>
    </div>
  );
};

export default News;