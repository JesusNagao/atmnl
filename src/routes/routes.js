import Home from '../components/DynamicComponents/Main Page/MainPage';
import About from '../components/StaticComponents/AboutUs/AboutUs';
import Events from '../components/StaticComponents/Events/Events';
import RatingSelection from '../components/DynamicComponents/Ranking/RatingSelection';
import Ranking from '../components/DynamicComponents/Ranking/Ranking';

const routes = [
  { path: '/', name: 'Inicio', element: <Home /> },
  { path: '/federacion', name: 'Sobre Nosotros', element: <About /> },
  { path: '/calendario', name: 'calendario', element: <Events /> },
  { path: '/ranking', name: 'Ranking', element: <Ranking /> }, // Assuming you want to use the same component for ranking
  { path: '/ranking/:ratingType', name: 'Ranking', element: <Ranking /> }, // Assuming you want to use the same component for ranking
  { path: '/ranking-selection', name: 'Ranking Selection', element: <RatingSelection /> },
  // Add more as needed
];

export default routes;
