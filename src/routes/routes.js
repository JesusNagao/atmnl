import Home from "pages/MainPage/MainPage.js";
import About from 'pages/AboutUs/AboutUs.js';
import Events from 'pages/Events/Events.js';
import RatingSelection from 'pages/RankingSelection/RankingSelection.js';
import Ranking from 'pages/RankingSelection/Rankings/Ranking.js';

const routes = [
  { path: '/', name: 'Inicio', element: <Home /> },
  { path: '/federacion', name: 'Sobre Nosotros', element: <About /> },
  { path: '/calendario', name: 'calendario', element: <Events /> },
  { path: '/ranking', name: 'Ranking', element: <Ranking /> }, // Assuming you want to use the same component for ranking
  { path: '/ranking-selection', name: 'Ranking Selection', element: <RatingSelection /> },
  // Add more as needed
];

export default routes;
