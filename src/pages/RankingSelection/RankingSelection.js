import React from 'react';
import IntroBanner from 'components/DynamicComponents/IntroBanner/IntroBanner';
import { Users, School, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import 'styles/RankingSelection.css';
import ImgRnkNac from 'assets/Imagenes_SeleccionNacional.jpg';
import ImgRnkBorregos from 'assets/Imagenes_CircuitoBorregos.jpeg';

export default function LandingPage() {
  return (
    <div className="landing-page">
      <IntroBanner />
      <main className="landing-main">
        <div className="container-principal">

          <div className="opciones-ranking">
            <Link to="/ranking" className="tarjeta-ranking">
              <div className="imagen-tarjeta-container">
                <img src={ImgRnkNac} alt="Ranking Nacional" className="imagen-tarjeta" />
                <div className="overlay-tarjeta"></div>
              </div>

              <div className="contenido-tarjeta">
                <h2 className="titulo-tarjeta">
                  <Users className="icono-tarjeta-inline" />
                  Ranking Nacional
                </h2>

                <div className="contenido-hover">
                  <p className="descripcion-tarjeta">
                    Consulta los rankings oficiales nacionales para todas las categorías en México
                  </p>
                  <div className="info-tarjeta">
                    <ul className="caracteristicas-tarjeta">
                      <li className="caracteristica">Actualizado mensualmente</li>
                      <li className="caracteristica">Todas las categorías de edad</li>
                      <li className="caracteristica">Divisiones masculinas y femeninas</li>
                    </ul>
                  </div>
                  <div className="accion-tarjeta">
                    <span className="texto-boton">Ver Rankings Nacionales</span>
                    <ChevronRight className="icono-accion-tarjeta" />
                  </div>
                </div>
              </div>
            </Link>

            <Link to="/ranking" className="tarjeta-ranking">
              <div className="imagen-tarjeta-container">
                <img src={ImgRnkBorregos} alt="Circuito Borregos" className="imagen-tarjeta" />
                <div className="overlay-tarjeta"></div>
              </div>

              <div className="contenido-tarjeta">
                <h2 className="titulo-tarjeta">
                  <School className="icono-tarjeta-inline" />
                  Ranking Circuito Borregos
                </h2>

                <div className="contenido-hover">
                  <p className="descripcion-tarjeta">
                    Explora los rankings y estadísticas del circuito de torneos universitarios
                  </p>
                  <div className="info-tarjeta">
                    <ul className="caracteristicas-tarjeta">
                      <li className="caracteristica">Rankings basados en torneos</li>
                      <li className="caracteristica">Categorías para todos los jugadores</li>
                      <li className="caracteristica">Datos disponibles por temporada</li>
                    </ul>
                  </div>
                  <div className="accion-tarjeta">
                    <span className="texto-boton">Ver Rankings Circuito Borregos</span>
                    <ChevronRight className="icono-accion-tarjeta" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
