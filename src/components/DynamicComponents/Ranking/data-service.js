// Función para obtener los datos de rankings según el tipo
export async function getRankingsData(ratingType) {
    try {
      // Determinar qué archivo JSON cargar según el tipo de ranking
      const basePath = "../../../assets/lib/rankings";
      const jsonFile = ratingType === 'national' ? `${basePath}/RankingN-Temp.json` : `${basePath}/RankingCB-Temp.json`;
      
      // Cargar el archivo JSON
      const response = await fetch(jsonFile);
      const data = await response.json();
      
      return data;
    } catch (error) {
      console.error("Error al cargar los datos de rankings:", error);
      return {};
    }
  }
  
  // Función para obtener las noticias
  export async function getNewsItems() {
    try {
      const response = await fetch('../../../assets/lib/rankings/News-Temp.json');
      const data = await response.json();
      
      return data;
    } catch (error) {
      console.error("Error al cargar las noticias:", error);
      return [];
    }
  }
  
  // Función para obtener un jugador destacado al azar
  export async function getFeaturedPlayer(ratingType, category, rankingsData) {
    try {
      // Ya tenemos los datos de ranking, no necesitamos cargarlos nuevamente
      if (!rankingsData || !rankingsData[category] || rankingsData[category].length === 0) {
        return null;
      }
      
      const players = rankingsData[category];
      
      // Elegir un jugador aleatorio de la categoría seleccionada
      const randomIndex = Math.floor(Math.random() * players.length);
      const randomPlayer = players[randomIndex];
      
      // Agregar información adicional al jugador
      return {
        ...randomPlayer,
        category: formatCategoryName(category),
        age: generateRandomAge(category),
        style: generateRandomStyle(),
        achievements: generateRandomAchievements(),
        isClub: ratingType === 'circuito-borregos'
      };
    } catch (error) {
      console.error("Error al cargar el jugador destacado:", error);
      return null;
    }
  }
  
  // Función para formatear el nombre de la categoría
  function formatCategoryName(category) {
    return category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }
  
  // Función para generar una edad aleatoria según la categoría
  function generateRandomAge(category) {
    if (category.includes('sub-11')) {
      return Math.floor(Math.random() * 3) + 9; // 9-11 años
    } else if (category.includes('sub-13')) {
      return Math.floor(Math.random() * 3) + 11; // 11-13 años
    } else if (category.includes('sub-15')) {
      return Math.floor(Math.random() * 3) + 13; // 13-15 años
    } else if (category.includes('sub-19')) {
      return Math.floor(Math.random() * 4) + 15; // 15-19 años
    } else {
      return Math.floor(Math.random() * 15) + 18; // 18-33 años
    }
  }
  
  // Función para generar un club aleatorio
  function generateRandomClub() {
    const clubs = [
      "Club Deportivo Chapultepec", 
      "Monterrey Table Tennis", 
      "Tenis de Mesa CDMX", 
      "Borregos Monterrey", 
      "Tigres UANL", 
      "Club Atlas", 
      "Academia Olímpica", 
      "Club Tec CCM", 
      "Potros UAEMex", 
      "Pumas UNAM"
    ];
    
    return clubs[Math.floor(Math.random() * clubs.length)];
  }
  
  // Función para generar un estilo de juego aleatorio
  function generateRandomStyle() {
    const styles = [
      "Ofensivo", 
      "Defensivo", 
      "All-around", 
      "Topspin", 
      "Chopper", 
      "Bloqueador",
      "Penhold", 
      "Shakehand", 
      "Agresivo", 
      "Contragolpe"
    ];
    
    return styles[Math.floor(Math.random() * styles.length)];
  }
  
  // Función para generar logros aleatorios
  function generateRandomAchievements() {
    const achievements = [
      "Campeón Regional 2024", 
      "Medallista Nacional 2023", 
      "Top 3 en Circuito Borregos", 
      "Seleccionado Estatal", 
      "Semifinalista Universitaria", 
      "Medallista en Juegos Estatales", 
      "Campeón Divisional 2024", 
      "Finalista en Copa México", 
      "Mejor Jugador Revelación", 
      "Jugador del Año 2023"
    ];
    
    return achievements[Math.floor(Math.random() * achievements.length)];
  }