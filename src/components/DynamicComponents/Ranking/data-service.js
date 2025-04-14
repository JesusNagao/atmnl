// data-service.js

// Mock Rankings Data
export const getRankingsData = async (ratingType) => {
    const data = {
      "mens-national": [
        { rank: 1, change: 0, name: "Carlos Ramírez", points: 1820, tournaments: 5, region: "Monterrey" },
        { rank: 2, change: 1, name: "José Martínez", points: 1700, tournaments: 6, region: "Saltillo" },
        { rank: 3, change: -1, name: "Luis Torres", points: 1650, tournaments: 4, region: "Monclova" }
      ],
      "womens-national": [
        { rank: 1, change: 2, name: "Ana Sánchez", points: 1880, tournaments: 6, region: "Guadalupe" },
        { rank: 2, change: 0, name: "Elena Rivas", points: 1750, tournaments: 5, region: "San Pedro" }
      ],
      // ... add more categories as needed
    };
  
    return data;
  };
  
  // Mock News Items
  export const getNewsItems = async (ratingType) => {
    return [
      {
        id: 1,
        title: "Nuevo torneo estatal confirmado",
        date: "April 10, 2025",
        content: "Se ha confirmado un nuevo torneo estatal para el mes de mayo en Monterrey.",
        category: "Tournament"
      },
      {
        id: 2,
        title: "Mejoras en instalaciones deportivas",
        date: "April 8, 2025",
        content: "El polideportivo de San Nicolás ha sido renovado con nuevas mesas y equipamiento.",
        category: "Facilities"
      },
      {
        id: 3,
        title: "Capacitación para árbitros",
        date: "April 5, 2025",
        content: "La asociación anuncia un curso de capacitación para árbitros el próximo fin de semana.",
        category: "News"
      }
    ];
  };
  
  // Mock Featured Player
  export const getFeaturedPlayer = async (ratingType) => {
    return {
      name: "Luis Torres",
      rank: 3,
      category: "Mens National",
      age: 22,
      club: "Club Monterrey",
      style: "Ofensivo",
      achievements: "Campeón estatal 2023, Subcampeón nacional 2024"
    };
  };
  