import { useState } from 'react';
import './AboutUs.css';
import Presidente from '../../../assets/About Us/Panes.jpg'; 
import Vicepresidente from '../../../assets/About Us/Andrew.jpg'; 
import VocalDeportivo from '../../../assets/About Us/Nagao.jpg'; 
import { Link, useLocation } from 'react-router-dom';

export default function AboutUs() {
  const [activeTab, setActiveTab] = useState('team');

  // Datos del equipo (a futuro irían en una base de datos)
  const team = [
    {
      id: 1,
      name: 'Lic. Gerardo Ramón Panes Morales',
      position: 'Presidente',
      description: 'Líder de la asociación con más de 10 años de experiencia en tenis de mesa y entrenador profesional de Tenis de Mesa.',
      image: Presidente
    },
    {
      id: 2,
      name: 'Andrés Eduardo Moreira Lee',
      position: 'Vicepresidente',
      description: 'Coordinador de torneos regionales.',
      image: Vicepresidente
    },
    {
      id: 3,
      name: 'Lic. Rafael Rodriguez Meza',
      position: 'Tesorero',
      description: 'Encargado de finanzas y patrocinios para la asociación.',
      image: '/api/placeholder/300/300'
    },
    {
      id: 4,
      name: 'Ing. Brandon Hernández Bonilla',
      position: 'Secretario',
      description: 'Gestiona la comunicación y documentación oficial.',
      image: '/api/placeholder/300/300'
    },
    {
      id: 5,
      name: 'Roberto Garza',
      position: '',
      description: 'Responsable del desarrollo técnico de jugadores y entrenadores.',
      image: '/api/placeholder/300/300'
    },
    {
      id: 6,
      name: 'Ing. Jesus Leobardo Nagao Álvarez',
      position: 'Vocal Deportivo',
      description: 'Representante deportivo del consejo, encargado de hablar, escuchar, y mejorar a base de conversaciones con los deportistas. Es el representante que nos ayuda a saber los problemas de aquellos anexados con la asociación.',
      image: VocalDeportivo
    },
    {
      id: 7,
      name: 'Fernando Torres',
      position: 'Relaciones Públicas',
      description: 'Maneja la presencia mediática y relaciones institucionales.',
      image: '/api/placeholder/300/300'
    }
  ];

  return (
    <div className="about-container">
      {/* Banner con título superpuesto */}
      <div className="about-banner">
        <img 
          className="about-banner-image" 
          src="./images/Care-Image.jpeg" 
          alt="Tenis de Mesa NL" 
        />
        <div className="about-banner-overlay">
          <h1>SOBRE NOSOTROS</h1>
        </div>
      </div>
      
      {/* Navegación tipo breadcrumb */}
      <div className="breadcrumb">
        <Link to="/">Página de inicio</Link> &gt; <span className="current-page">Sobre Nosotros</span>
      </div>

      <div className="about-content">
        <div className="about-intro">
          <h2>Asociación de Tenis de Mesa de Nuevo León</h2>
          <p className="subtitle">
            Promoviendo el tenis de mesa en Nuevo León desde 2010, nuestra asociación trabaja para desarrollar 
            el talento local y fomentar la práctica de este deporte a todos los niveles.
          </p>
        </div>

        <div className="tab-container">
          <div className="tab-buttons">
            <button 
              onClick={() => setActiveTab('team')} 
              className={`tab-button ${activeTab === 'team' ? 'active' : ''}`}>
              Nuestro Equipo
            </button>
            <button 
              onClick={() => setActiveTab('mission')} 
              className={`tab-button ${activeTab === 'mission' ? 'active' : ''}`}>
              Misión y Visión
            </button>
            <button 
              onClick={() => setActiveTab('contact')} 
              className={`tab-button ${activeTab === 'contact' ? 'active' : ''}`}>
              Contacto
            </button>
          </div>

          <div className="tab-content">
            {activeTab === 'team' && (
              <div className="team-section">
                <div className="team-categories">
                  <div className="team-category">
                    <h3 className="category-title">PERSONAL</h3>
                    <div className="category-grid">
                      {team.slice(0, 4).map((member) => (
                        <div key={member.id} className="team-card">
                          <div className="team-image-container">
                            <img src={member.image} alt={member.name} />
                          </div>
                          <div className="team-info">
                            <h4>{member.name}</h4>
                            <p className="team-position">{member.position}</p>
                            <p className="team-description">{member.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="team-category">
                    <h3 className="category-title">CAPITANES DE LA CONFEDERACIÓN</h3>
                    <div className="category-grid">
                      {team.slice(4, 6).map((member) => (
                        <div key={member.id} className="team-card">
                          <div className="team-image-container">
                            <img src={member.image} alt={member.name} />
                          </div>
                          <div className="team-info">
                            <h4>{member.name}</h4>
                            <p className="team-position">{member.position}</p>
                            <p className="team-description">{member.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="team-category">
                    <h3 className="category-title">JUNTA</h3>
                    <div className="category-grid">
                      {team.slice(6).map((member) => (
                        <div key={member.id} className="team-card">
                          <div className="team-image-container">
                            <img src={member.image} alt={member.name} />
                          </div>
                          <div className="team-info">
                            <h4>{member.name}</h4>
                            <p className="team-position">{member.position}</p>
                            <p className="team-description">{member.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'mission' && (
              <div className="mission-section">
                <div className="mission-block">
                  <h3>Nuestra Misión</h3>
                  <p>
                    Promover y desarrollar el tenis de mesa en Nuevo León, ofreciendo oportunidades de entrenamiento, 
                    competición y crecimiento para jugadores de todos los niveles, desde principiantes hasta profesionales. 
                    Trabajamos para elevar el nivel competitivo del estado y posicionarlo como referente nacional en este deporte.
                  </p>
                </div>
                
                <div className="mission-block">
                  <h3>Nuestra Visión</h3>
                  <p>
                    Ser la asociación deportiva líder en Nuevo León, reconocida por su excelencia organizativa, 
                    formación de talentos y contribución al desarrollo integral de los deportistas. Aspiramos a 
                    convertir el tenis de mesa en uno de los deportes más practicados en nuestro estado.
                  </p>
                </div>
                
                <div className="mission-block">
                  <h3>Nuestros Valores</h3>
                  <ul>
                    <li><span>Excelencia:</span> Buscamos la mejora continua en todas nuestras actividades.</li>
                    <li><span>Inclusión:</span> Promovemos la participación de todos, sin importar edad o nivel.</li>
                    <li><span>Integridad:</span> Actuamos con honestidad y transparencia en todas nuestras operaciones.</li>
                    <li><span>Trabajo en equipo:</span> Colaboramos para lograr objetivos comunes.</li>
                    <li><span>Pasión:</span> Compartimos el amor por el tenis de mesa y lo transmitimos a la comunidad.</li>
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'contact' && (
              <div className="contact-section">
                <div className="contact-block main-office">
                  <h3>Oficina Principal</h3>
                  <address>
                    <p>Av. Universidad 123, Col. Centro</p>
                    <p>Monterrey, Nuevo León, México</p>
                    <p>C.P. 64000</p>
                    <p>Teléfono: (81) 1234-5678</p>
                    <p>Email: <a href="mailto:contacto@tenisdemesanl.mx">contacto@tenisdemesanl.mx</a></p>
                  </address>
                </div>
                
                <div className="contact-block hours">
                  <h3>Horario de Atención</h3>
                  <div className="hours-list">
                    <div className="hours-item">
                      <span className="day">Lunes - Viernes:</span>
                      <span className="time">9:00 AM - 7:00 PM</span>
                    </div>
                    <div className="hours-item">
                      <span className="day">Sábados:</span>
                      <span className="time">10:00 AM - 2:00 PM</span>
                    </div>
                    <div className="hours-item">
                      <span className="day">Domingos:</span>
                      <span className="time">Cerrado</span>
                    </div>
                  </div>
                </div>
                
                <div className="contact-block social">
                  <h3>Redes Sociales</h3>
                  <div className="social-links">
                    <a href="#" className="social-link facebook">Facebook</a>
                    <a href="#" className="social-link instagram">Instagram</a>
                    <a href="#" className="social-link twitter">Twitter</a>
                  </div>
                </div>
                
                <div className="contact-form-container">
                  <h3>Envíanos un Mensaje</h3>
                  <form className="contact-form">
                    <div className="form-group">
                      <label htmlFor="name">Nombre:</label>
                      <input type="text" id="name" name="name" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email:</label>
                      <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="subject">Asunto:</label>
                      <input type="text" id="subject" name="subject" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="message">Mensaje:</label>
                      <textarea id="message" name="message" rows="4" required></textarea>
                    </div>
                    <button type="submit" className="submit-button">Enviar Mensaje</button>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}