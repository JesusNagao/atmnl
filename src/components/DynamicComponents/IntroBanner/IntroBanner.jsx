import React, { useEffect } from 'react';
import './IntroBanner.css';
import { Link, useLocation } from 'react-router-dom';

export default function IntroBanner({ 
  title, 
  description, 
  image = "./images/Care-Image.jpeg",
  link = null
}) {
  const location = useLocation();
  const [bannerContent, setBannerContent] = React.useState({
    title: title || 'Título Predeterminado',
    description: description || 'Descripción predeterminada',
    image: image,
    link: link
  });

  // Actualizar contenido basado en la ruta actual si no se proporcionan props
  useEffect(() => {
    if (!title && !description) {
      const path = location.pathname;
      
      // Contenido para cada tipo de página
      const contentTypes = {
        ranking: {
          title: 'Ranking de Jugadores',
          description: 'Consulta la clasificación actual de los mejores jugadores',
          image: './images/Care-Image.jpeg',
          link: null
        },
        aboutUs: {
          title: 'Sobre Nosotros',
          description: 'Conoce más sobre nuestra organización y visión',
          image: './images/Care-Image.jpeg',
          link: null
        },
        torneos: {
          title: 'Torneos',
          description: 'Información sobre los próximos torneos y competencias',
          image: './images/torneos-bg.jpeg',
          link: null
        },
        default: {
          title: 'Tenis de Mesa NL',
          description: 'Bienvenidos a la página oficial',
          image: './images/Care-Image.jpeg',
          link: null
        }
      };
      
      // Mapeo de rutas a tipos de contenido
      const routeToContentType = {
        '/ranking': 'ranking',
        '/ranking-selection': 'ranking', // Esta ruta usará el contenido de ranking
        '/federacion': 'aboutUs',
        '/sobre-nosotros': 'aboutUs',
        '/torneos': 'torneos',
        '/tournaments': 'torneos'
      };
      
      // Determinar qué tipo de contenido mostrar
      const contentType = routeToContentType[path] || 'default';
      setBannerContent(contentTypes[contentType]);
    }
  }, [location.pathname, title, description]);

  // Función para generar el breadcrumb
  const renderBreadcrumb = () => {
    const path = location.pathname;
    const isRoot = path === '/';
    
    if (isRoot) return null;
    
    const pathSegments = path.split('/').filter(segment => segment);
    const pageName = pathSegments[pathSegments.length - 1]
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    
    return (
      <div className="breadcrumb">
        <Link to="/">Página de inicio</Link> &gt; {pageName}
      </div>
    );
  };

  return (
    <>
      <div className="intro-banner">
        {/* Banner con título superpuesto */}
        <img className="banner-image" src={bannerContent.image} alt="Tenis de Mesa NL" />
        <div className="banner-overlay">
          <h1>{bannerContent.title}</h1>
          {bannerContent.description && <p>{bannerContent.description}</p>}
          {bannerContent.link && (
            <div className="banner-link">
              <Link to={bannerContent.link} className="btn-link">
                Ver más
              </Link>
            </div>
          )}
        </div>
      </div>
      {renderBreadcrumb()}
    </>
  );
}