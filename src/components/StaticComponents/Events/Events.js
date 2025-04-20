// Events.js
import { Calendar, InfoIcon } from 'lucide-react';
import './Events.css';

export default function Events() {
    return (
        <div className="events-container">
            <div className="events-header">
                <div className="events-title-section">
                    <Calendar className="calendar-icon" />
                    <h1>Calendario de Eventos</h1>
                </div>
                <p className="events-description">
                    En este calendario podrás encontrar los próximos eventos afiliados a la Asociación de Tenis de Mesa de Nuevo León
                </p>
                <div className="events-info-banner">
                    <InfoIcon className="info-icon" />
                    <p>Haz clic en cualquier evento para ver más detalles</p>
                </div>
            </div>
            
            <div className="calendar-container">
                <iframe 
                    src="https://calendar.google.com/calendar/embed?src=5e00e21be6fe5da6d1550075b401e6c0b5ed0e9ee62dc5dfa5296d9033155d32%40group.calendar.google.com&ctz=America%2FMonterrey&showTitle=0&showNav=1&showPrint=0&showTabs=1&showCalendars=0" 
                    className="calendar-iframe" 
                    title="Calendario de eventos ATNL"
                    loading="lazy">
                </iframe>
            </div>
        </div>
    );
}