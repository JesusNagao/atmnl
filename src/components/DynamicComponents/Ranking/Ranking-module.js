// Ranking-module.jsx
import React, { useState, useEffect } from 'react';
import 'styles/MainPage/Ranking-module.css';

// Dummy data for the ranking table
const dummyRanking = [
  { id: 1, position: 1, name: "Truls Möregårdh", club: "Eslövs AI BTK", points: 5847 },
  { id: 2, position: 2, name: "Anton Källberg", club: "Grenzau", points: 5612 },
  { id: 3, position: 3, name: "Kristian Karlsson", club: "AS Pontoise", points: 5489 },
  { id: 4, position: 4, name: "Jon Persson", club: "Fulda-Maberzell", points: 5326 },
  { id: 5, position: 5, name: "Christina Källberg", club: "GDCS Do Juncal", points: 5114 },
  { id: 6, position: 6, name: "Linda Bergström", club: "Linz AG", points: 4987 },
  { id: 7, position: 7, name: "Filippa Bergand", club: "Ängby SK", points: 4863 },
  { id: 8, position: 8, name: "Simon Berglund", club: "Halmstad BTK", points: 4735 },
  { id: 9, position: 9, name: "Viktor Brodd", club: "Söderhamns UIF", points: 4591 },
  { id: 10, position: 10, name: "Ellen Holmsten", club: "Spårvägens BTK", points: 4460 }
];

const Ranking = () => {
  const [ranking, setRanking] = useState([]);

  useEffect(() => {
    // In a real app, you would fetch ranking data from an API
    setRanking(dummyRanking);
  }, []);

  return (
    <div className="ranking-container">
      <div className="ranking-table-wrapper">
        <table className="ranking-table">
          <thead>
            <tr>
              <th>Pos</th>
              <th>Jugador</th>
              <th>Club</th>
              <th>Puntos</th>
            </tr>
          </thead>
          <tbody>
            {ranking.map((player) => (
              <tr key={player.id} className={player.position <= 3 ? "highlighted" : ""}>
                <td className="position">{player.position}</td>
                <td className="player-name">{player.name}</td>
                <td className="player-club">{player.club}</td>
                <td className="player-points">{player.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="ranking-footer">
        <div className="last-updated">
          Última actualización: 15/04/2025
        </div>
        <a href="/ranking-selection" className="ranking-link">Ver ranking completo</a>
      </div>
    </div>
  );
};

export default Ranking;