// NewsSlider.jsx
import React, { useState, useEffect } from 'react';
import 'styles/MainPage/NewsSlider.css';

// Mismos datos dummy pero adaptados para el slider
const dummyNews = [
  {
    id: 1,
    title: "Torneo Estatal 2025 - Fechas confirmadas",
    date: "15/04/2025",
    summary: "La Asociación de Tenis de Mesa anuncia las fechas oficiales para el Torneo Estatal 2025. El evento se celebrará del 12 al 14 de junio en el Pabellón Deportivo Central.",
    image: "/images/news/torneo-estatal.png",
    tags: ["Torneos", "Oficial"],
    author: "Admin"
  },
  {
    id: 2,
    title: "Resultados del Circuito Borregos",
    date: "10/04/2025",
    summary: "Nuestros representantes estatales lograron destacar en el Circuito Nacional Sub-21 celebrado en Guadalajara. Tres medallas de oro y dos de plata para nuestro equipo.",
    image: "/images/news/circuito-borregos.png",
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
    image: "/images/news/ranking-oficial.jpeg",
    tags: ["Ranking", "Oficial"],
    author: "Comité Técnico"
  }
];

const NewsSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  
  // Efecto para cambiar automáticamente las diapositivas cada 5 segundos
  useEffect(() => {
    let interval;
    
    if (!isPaused) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % dummyNews.length);
      }, 5000);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPaused]);

  // Navegar manualmente entre diapositivas
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? dummyNews.length - 1 : prev - 1));
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % dummyNews.length);
  };

  return (
    <div 
      className="news-slider"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="slider-container">
        {dummyNews.map((news, index) => (
          <div 
            key={news.id}
            className={`slider-slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${news.image})` }}
          >
            <div className="slide-overlay">
              <div className="slide-content">
                <div className="slide-tags">
                  {news.tags.map((tag, i) => (
                    <span key={i} className="slide-tag">{tag}</span>
                  ))}
                </div>
                <h2 className="slide-title">{news.title}</h2>
                <div className="slide-metadata">
                  <span className="slide-date">{news.date}</span>
                  {news.author && <span className="slide-author">por {news.author}</span>}
                </div>
                <p className="slide-summary">{news.summary}</p>
                <a href={`/noticias/${news.title.toLowerCase().replace(/ /g, '-')}`} className="read-more">
                  Leer más
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Controles del slider */}
      <div className="slider-controls">
        <button className="slider-arrow slider-prev" onClick={goToPrevSlide}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6"></path>
          </svg>
        </button>
        
        <div className="slider-indicators">
          {dummyNews.map((_, index) => (
            <button 
              key={index} 
              className={`slider-indicator ${index === currentSlide ? 'active' : ''}`} 
              onClick={() => goToSlide(index)}
              aria-label={`Ir a la noticia ${index + 1}`}
            />
          ))}
        </div>
        
        <button className="slider-arrow slider-next" onClick={goToNextSlide}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default NewsSlider;