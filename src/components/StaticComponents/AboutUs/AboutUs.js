import { useState } from 'react';
import './AboutUs.css';
import Presidente from '../../../assets/About Us/Panes.jpg'; // Assuming you have a local image for the president
import Vicepresidente from '../../../assets/About Us/Andrew.jpg'; // Assuming you have a local image for the Vicepresident
import VocalDeportivo from '../../../assets/About Us/Nagao.jpg'; // Assuming you have a local image for the Athlete Representative
export default function AboutUs() {
  const [activeTab, setActiveTab] = useState('team');

  // Esto a futuro iría en una base de datos 
  // this would go on a database in the future
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
    <div className="container">
      <div className="section">
        <div className="text-center mb-12">
          <h1 className="title">Asociación de Tenis de Mesa de Nuevo León</h1>
          <p className="subtitle">
            Promoviendo el tenis de mesa en Nuevo León desde 2010, nuestra asociación trabaja para desarrollar 
            el talento local y fomentar la práctica de este deporte a todos los niveles.
          </p>
        </div>

        <div className="mb-8">
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

          {activeTab === 'team' && (
            <div className="grid">
              {team.map((member) => (
                <div key={member.id} className="card">
                  <img src={member.image} alt={member.name} />
                  <div className="card-content">
                    <h3>{member.name}</h3>
                    <p className="position">{member.position}</p>
                    <p className="description">{member.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'mission' && (
            <div className="card-content" style={{ background: '#fff', borderRadius: '12px', padding: '24px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' }}>
              <div className="mb-8">
                <h2 className="title" style={{ fontSize: '1.5rem' }}>Nuestra Misión</h2>
                <p className="description">
                  Promover y desarrollar el tenis de mesa en Nuevo León, ofreciendo oportunidades de entrenamiento, 
                  competición y crecimiento para jugadores de todos los niveles, desde principiantes hasta profesionales. 
                  Trabajamos para elevar el nivel competitivo del estado y posicionarlo como referente nacional en este deporte.
                </p>
              </div>
              <div className="mb-8">
                <h2 className="title" style={{ fontSize: '1.5rem' }}>Nuestra Visión</h2>
                <p className="description">
                  Ser la asociación deportiva líder en Nuevo León, reconocida por su excelencia organizativa, 
                  formación de talentos y contribución al desarrollo integral de los deportistas. Aspiramos a 
                  convertir el tenis de mesa en uno de los deportes más practicados en nuestro estado.
                </p>
              </div>
              <div>
                <h2 className="title" style={{ fontSize: '1.5rem' }}>Nuestros Valores</h2>
                <ul className="description">
                  <li><strong>Excelencia:</strong> Buscamos la mejora continua en todas nuestras actividades.</li>
                  <li><strong>Inclusión:</strong> Promovemos la participación de todos, sin importar edad o nivel.</li>
                  <li><strong>Integridad:</strong> Actuamos con honestidad y transparencia en todas nuestras operaciones.</li>
                  <li><strong>Trabajo en equipo:</strong> Colaboramos para lograr objetivos comunes.</li>
                  <li><strong>Pasión:</strong> Compartimos el amor por el tenis de mesa y lo transmitimos a la comunidad.</li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'contact' && (
            <div className="card-content" style={{ background: '#fff', borderRadius: '12px', padding: '24px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' }}>
              <h2 className="title" style={{ fontSize: '1.5rem' }}>Contáctanos</h2>
              <p><strong>Dirección:</strong> Av. Universidad 123, Col. Centro, Monterrey, Nuevo León, México</p>
              <p><strong>Teléfono:</strong> (81) 1234-5678</p>
              <p><strong>Email:</strong> contacto@tenisdemesanl.mx</p>
              <br />
              <p><strong>Horario:</strong></p>
              <ul>
                <li>Lunes a Viernes: 9:00 AM - 7:00 PM</li>
                <li>Sábados: 10:00 AM - 2:00 PM</li>
                <li>Domingos: Cerrado</li>
              </ul>
              <br />
              <p><strong>Síguenos en:</strong></p>
              <p>
                <a href="#">Facebook</a> | <a href="#">Instagram</a> | <a href="#">Twitter</a>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
