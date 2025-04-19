// Calendar.jsx
import React, { useState, useEffect } from 'react';
import 'styles/MainPage/Event.card.css';

// This would normally be fetched from an API
const dummyEvents = [
  {
    id: 1,
    title: "Torneo Estatal 2025",
    date: "20/05/2025",
    location: "Gimnasio Nuevo León",
    categories: ["Senior", "Juvenil", "Infantil"],
    registrationDeadline: "15/05/2025"
  },
  {
    id: 2,
    title: "Selectivo Regional Zona Norte",
    date: "10/06/2025",
    location: "Centro Deportivo Municipal",
    categories: ["Senior", "Juvenil"],
    registrationDeadline: "01/06/2025"
  },
  {
    id: 3,
    title: "Clínica de Entrenamiento",
    date: "25/04/2025",
    location: "Club Deportivo NL",
    categories: ["Todos los niveles"],
    registrationDeadline: "20/04/2025"
  }
];

const EventCard = ({ title, date, location, categories, registrationDeadline }) => {
  return (
    <div className="event-card">
      <div className="event-date-pill">{date}</div>
      <h3 className="event-title">{title}</h3>
      <p className="event-location">
        <i className="fa fa-map-marker"></i> {location}
      </p>
      <div className="event-categories">
        {categories.map((category, index) => (
          <span key={index} className="category-tag">
            {category}
          </span>
        ))}
      </div>
      <p className="event-deadline">
        Inscripciones hasta: {registrationDeadline}
      </p>
      <a href="#" className="event-details-button">Ver detalles</a>
    </div>
  );
};

const Calendar = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // In a real app, you would fetch events from an API
    setEvents(dummyEvents);
  }, []);

  return (
    <div className="calendar-container">
      <div className="events-grid">
        {events.map((event) => (
          <EventCard
            key={event.id}
            title={event.title}
            date={event.date}
            location={event.location}
            categories={event.categories}
            registrationDeadline={event.registrationDeadline}
          />
        ))}
      </div>
      <div className="calendar-view-all">
        <a href="/calendario" className="view-all-button">Ver calendario completo</a>
      </div>
    </div>
  );
};

export default Calendar;