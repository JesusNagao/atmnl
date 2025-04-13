import Home from '../components/DynamicComponents/Main Page/MainPage';
import About from '../components/StaticComponents/AboutUs/AboutUs';
import Events from '../components/StaticComponents/Events/Events';

const routes = [
  { path: '/', name: 'Inicio', element: <Home /> },
  { path: '/federacion', name: 'Sobre Nosotros', element: <About /> },
  { path: '/calendario', name: 'calendario', element: <Events /> },
  // Add more as needed
];

export default routes;
