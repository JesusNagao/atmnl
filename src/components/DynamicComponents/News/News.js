// News.jsx
import React, { useState, useEffect } from 'react';
import 'styles/MainPage/News.css';

// Enhanced dummy news data with more details and real content
const dummyNews = [
  {
    id: 1,
    title: "Torneo Estatal 2025 - Fechas confirmadas",
    date: "15/04/2025",
    summary: "La Asociación de Tenis de Mesa anuncia las fechas oficiales para el Torneo Estatal 2025. El evento se celebrará del 12 al 14 de junio en el Pabellón Deportivo Central.",
    image: "/images/news/torneo-estatal.jpg",
    tags: ["Torneos", "Oficial"],
    author: "Admin"
  },
  {
    id: 2,
    title: "Resultados del Circuito Nacional Sub-21",
    date: "10/04/2025",
    summary: "Nuestros representantes estatales lograron destacar en el Circuito Nacional Sub-21 celebrado en Guadalajara. Tres medallas de oro y dos de plata para nuestro equipo.",
    image: "/images/news/circuito-sub21.jpg",
    tags: ["Competición", "Sub-21"],
    author: "Equipo Técnico"
  },
  {
    id: 3,
    title: "Clínica de entrenamiento con el campeón nacional",
    date: "05/04/2025",
    summary: "No te pierdas la clínica especial de entrenamiento que impartirá el actual campeón nacional el próximo fin de semana. Plazas limitadas disponibles para todos los niveles.",
    image: "/images/news/clinica.jpg",
    tags: ["Formación", "Eventos"],
    author: "Departamento de Formación"
  },
  {
    id: 4,
    title: "Nuevo sistema de ranking implementado",
    date: "01/04/2025",
    summary: "A partir de este mes, la federación utilizará un nuevo sistema de cálculo para el ranking nacional. Este cambio busca reflejar mejor el rendimiento real de los jugadores.",
    image: "/images/news/ranking.jpg",
    tags: ["Ranking", "Oficial"],
    author: "Comité Técnico"
  }
];

const NewsCard = ({ title, date, summary, image, tags, author }) => {
  return (
    <div className="news-card">
      <div className="news-image">
        <img src={image || "/images/news/default.jpg"} alt={title} />
        {tags && tags.length > 0 && (
          <div className="news-tags">
            {tags.map((tag, index) => (
              <span key={index} className="news-tag">{tag}</span>
            ))}
          </div>
        )}
      </div>
      <div className="news-content">
        <h3>{title}</h3>
        <div className="news-metadata">
          <span className="news-date">{date}</span>
          {author && <span className="news-author">por {author}</span>}
        </div>
        <p className="news-summary">{summary}</p>
        <div className="news-footer">
          <a href={`/noticias/${title.toLowerCase().replace(/ /g, '-')}`} className="read-more">
            Leer más
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

const News = ({ limit = 3 }) => {
  const [news, setNews] = useState([]);
  const [activeFilter, setActiveFilter] = useState('Todos');
  const filters = ['Todos', 'Torneos', 'Competición', 'Formación', 'Oficial'];

  useEffect(() => {
    // In a real app, you would fetch news from an API
    setNews(dummyNews);
  }, []);

  const filteredNews = activeFilter === 'Todos' 
    ? news 
    : news.filter(item => item.tags && item.tags.includes(activeFilter));

  return (
    <div className="news-module">
      <div className="news-filters">
        {filters.map(filter => (
          <button 
            key={filter}
            className={`filter-button ${activeFilter === filter ? 'active' : ''}`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>
      
      <div className="news-container">
        {filteredNews.slice(0, limit).map((item) => (
          <NewsCard
            key={item.id}
            title={item.title}
            date={item.date}
            summary={item.summary}
            image={item.image}
            tags={item.tags}
            author={item.author}
          />
        ))}
      </div>
      
      <div className="news-navigation">
        <div className="pagination">
          <span className="pagination-info">Mostrando {Math.min(filteredNews.length, limit)} de {filteredNews.length} noticias</span>
          <div className="pagination-controls">
            <button className="pagination-button" disabled>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6"></path>
              </svg>
            </button>
            <span className="pagination-current">1</span>
            <button className="pagination-button">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6"></path>
              </svg>
            </button>
          </div>
        </div>
        <a href="/noticias" className="view-all-button">Ver todas las noticias</a>
      </div>
    </div>
  );
};

export default News;