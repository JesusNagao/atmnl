// Ranking.jsx
import React, { useState, useEffect } from 'react';
import 'styles/Ranking.module.css';

// This would normally be fetched from an API
const dummyRankingData = {
  categories: [
    {
      name: "Senior Varonil",
      players: [
        { position: 1, name: "Carlos Ballesteros", points: 1250 },
        { position: 2, name: "Jesús Nagao", points: 1180 },
        { position: 3, name: "Alejandro Méndez", points: 1050 },
        { position: 4, name: "Ricardo González", points: 980 },
        { position: 5, name: "Manuel Ortiz", points: 920 }
      ]
    },
    {
      name: "Senior Femenil",
      players: [
        { position: 1, name: "Ana Gutiérrez", points: 1300 },
        { position: 2, name: "Mariana López", points: 1180 },
        { position: 3, name: "Sofía Ramírez", points: 1090 },
        { position: 4, name: "Daniela Torres", points: 950 },
        { position: 5, name: "Elena Martínez", points: 910 }
      ]
    }
  ]
};

const RankingTable = ({ category }) => {
  return (
    <div className="ranking-category">
      <h3>{category.name}</h3>
      <table className="ranking-table">
        <thead>
          <tr>
            <th>Pos.</th>
            <th>Jugador</th>
            <th>Puntos</th>
          </tr>
        </thead>
        <tbody>
          {category.players.map((player) => (
            <tr key={`${category.name}-${player.position}`}>
              <td>{player.position}</td>
              <td>{player.name}</td>
              <td>{player.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const Ranking = () => {
  const [rankingData, setRankingData] = useState({ categories: [] });
  const [activeCategory, setActiveCategory] = useState(0);

  useEffect(() => {
    // In a real app, you would fetch ranking data from an API
    setRankingData(dummyRankingData);
  }, []);

  return (
    <div className="ranking-container">
      <div className="ranking-tabs">
        {rankingData.categories.map((category, index) => (
          <button
            key={category.name}
            className={`tab-button ${activeCategory === index ? 'active' : ''}`}
            onClick={() => setActiveCategory(index)}
          >
            {category.name}
          </button>
        ))}
      </div>
      
      <div className="ranking-content">
        {rankingData.categories.length > 0 && (
          <RankingTable category={rankingData.categories[activeCategory]} />
        )}
      </div>
      
      <div className="ranking-view-all">
        <a href="/ranking" className="view-all-button">Ver ranking completo</a>
      </div>
    </div>
  );
};

export default Ranking;