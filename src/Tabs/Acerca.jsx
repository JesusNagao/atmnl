// Acerca.js
import React from 'react';
// Importa cualquier otro componente o estilo CSS que necesites aquí

const Acerca = () => {
  return (
    <div className="acerca-container">
      {/* Añade una clase de estilo si es necesario */}
      <h1>Acerca de Nosotros</h1>
      <section className="mision">
        <h2>Misión</h2>
        <p>Nuestra misión es...</p>
      </section>
      <section className="vision">
        <h2>Visión</h2>
        <p>Nuestra visión es...</p>
      </section>
      <section className="historia">
        <h2>Historia</h2>
        <p>Nuestra historia comenzó en...</p>
      </section>
      <section className="equipo">
        <h2>Equipo</h2>
        <ul>
          <li>Nombre del Miembro 1 - Presidente</li>
          <li>Nombre del Miembro 2 - Secretario</li>
          <li>Nombre del Miembro 3 - Tesorero</li>
          <li>Nombre del Miembro 4 - Vicepresidente</li>
          <li>Nombre del Miembro 5 - Comisario</li>
          <li>Nombre del Miembro 6 - Vocal de Consejo</li>
          <li>Nombre del Miembro 7 - Vocal Medallista/Deportista</li>
          {/* Y así sucesivamente */}
        </ul>
      </section>
      {/* Puedes añadir más secciones según sea necesario */}
    </div>
  );
};

export default Acerca;
