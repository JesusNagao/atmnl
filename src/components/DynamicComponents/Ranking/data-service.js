// data-service.js - Handles data fetching for both National and Circuito Borregos ratings

// Mock data for National Rankings
const nationalRankingsData = {
    "mens-national": [
      { rank: 1, change: 0, name: "Ricardo Villa", points: 3245, tournaments: 12, region: "Mexico City" },
      { rank: 2, change: 1, name: "Eduardo Martínez", points: 3120, tournaments: 10, region: "Monterrey" },
      { rank: 3, change: -1, name: "Gabriel Sánchez", points: 3080, tournaments: 11, region: "Guadalajara" },
      { rank: 4, change: 2, name: "Javier Rodríguez", points: 2890, tournaments: 9, region: "Puebla" },
      { rank: 5, change: 0, name: "Fernando López", points: 2765, tournaments: 8, region: "Mexico City" },
      { rank: 6, change: 3, name: "Alejandro Torres", points: 2640, tournaments: 10, region: "Tijuana" },
      { rank: 7, change: -2, name: "Carlos Ramírez", points: 2585, tournaments: 7, region: "Guadalajara" },
      { rank: 8, change: 0, name: "Enrique González", points: 2460, tournaments: 9, region: "Monterrey" },
      { rank: 9, change: -3, name: "Miguel Ángel Pérez", points: 2390, tournaments: 8, region: "Mexico City" },
      { rank: 10, change: 1, name: "Diego Hernández", points: 2275, tournaments: 7, region: "Cancún" }
    ],
    "womens-national": [
      { rank: 1, change: 0, name: "Ana Sofia García", points: 3180, tournaments: 11, region: "Mexico City" },
      { rank: 2, change: 0, name: "María Fernanda López", points: 3050, tournaments: 10, region: "Monterrey" },
      { rank: 3, change: 2, name: "Alejandra Rodríguez", points: 2985, tournaments: 12, region: "Guadalajara" },
      { rank: 4, change: -1, name: "Daniela Martínez", points: 2840, tournaments: 9, region: "Puebla" },
      { rank: 5, change: -1, name: "Laura Torres", points: 2765, tournaments: 10, region: "Tijuana" },
      { rank: 6, change: 0, name: "Carmen Hernández", points: 2630, tournaments: 8, region: "Mexico City" },
      { rank: 7, change: 2, name: "Isabel Ramírez", points: 2515, tournaments: 7, region: "Guadalajara" },
      { rank: 8, change: 0, name: "Gabriela Sánchez", points: 2450, tournaments: 9, region: "Monterrey" },
      { rank: 9, change: -2, name: "Patricia González", points: 2370, tournaments: 8, region: "Mexico City" },
      { rank: 10, change: 1, name: "Verónica Pérez", points: 2290, tournaments: 7, region: "Cancún" }
    ],
    "mens-sub-19": [
      { rank: 1, change: 1, name: "Andrés Mendoza", points: 2980, tournaments: 10, region: "Mexico City" },
      { rank: 2, change: -1, name: "Jorge Vargas", points: 2935, tournaments: 9, region: "Monterrey" },
      { rank: 3, change: 0, name: "David Flores", points: 2815, tournaments: 8, region: "Guadalajara" },
      { rank: 4, change: 2, name: "Luis Castillo", points: 2680, tournaments: 9, region: "Puebla" },
      { rank: 5, change: 0, name: "Roberto Ríos", points: 2575, tournaments: 7, region: "Mexico City" },
      { rank: 6, change: 1, name: "Juan Carlos Ortiz", points: 2490, tournaments: 8, region: "Tijuana" },
      { rank: 7, change: -3, name: "Emilio Guzmán", points: 2410, tournaments: 6, region: "Guadalajara" },
      { rank: 8, change: 0, name: "Pablo Morales", points: 2345, tournaments: 7, region: "Monterrey" },
      { rank: 9, change: 2, name: "Alberto Vega", points: 2270, tournaments: 6, region: "Mexico City" },
      { rank: 10, change: 0, name: "Héctor Navarro", points: 2185, tournaments: 5, region: "Cancún" }
    ],
    "womens-sub-19": [
      { rank: 1, change: 0, name: "Renata Vega", points: 2925, tournaments: 9, region: "Mexico City" },
      { rank: 2, change: 2, name: "Sofía Navarro", points: 2860, tournaments: 8, region: "Monterrey" },
      { rank: 3, change: -1, name: "Valeria Torres", points: 2750, tournaments: 9, region: "Guadalajara" },
      { rank: 4, change: -1, name: "Mariana Díaz", points: 2635, tournaments: 7, region: "Puebla" },
      { rank: 5, change: 0, name: "Carolina Méndez", points: 2520, tournaments: 8, region: "Mexico City" },
      { rank: 6, change: 0, name: "Andrea Solís", points: 2430, tournaments: 6, region: "Tijuana" },
      { rank: 7, change: 3, name: "Regina Castro", points: 2365, tournaments: 7, region: "Guadalajara" },
      { rank: 8, change: -1, name: "Natalia Ramos", points: 2290, tournaments: 6, region: "Monterrey" },
      { rank: 9, change: -1, name: "Fernanda Bautista", points: 2230, tournaments: 5, region: "Mexico City" },
      { rank: 10, change: -1, name: "Jimena Ortega", points: 2150, tournaments: 6, region: "Cancún" }
    ],
    "mens-sub-15": [
      { rank: 1, change: 2, name: "Diego Soto", points: 2650, tournaments: 8, region: "Mexico City" },
      { rank: 2, change: 0, name: "Mateo Ramírez", points: 2580, tournaments: 7, region: "Monterrey" },
      { rank: 3, change: -2, name: "Santiago López", points: 2515, tournaments: 7, region: "Guadalajara" },
      { rank: 4, change: 0, name: "Sebastián Torres", points: 2425, tournaments: 6, region: "Puebla" },
      { rank: 5, change: 1, name: "Leonardo García", points: 2340, tournaments: 7, region: "Mexico City" },
      { rank: 6, change: -1, name: "Nicolás Martínez", points: 2275, tournaments: 5, region: "Tijuana" },
      { rank: 7, change: 0, name: "Emiliano Rodríguez", points: 2190, tournaments: 6, region: "Guadalajara" },
      { rank: 8, change: 2, name: "Joaquín Morales", points: 2130, tournaments: 5, region: "Monterrey" },
      { rank: 9, change: -1, name: "Daniel Fuentes", points: 2070, tournaments: 4, region: "Mexico City" },
      { rank: 10, change: -1, name: "Bruno Herrera", points: 2010, tournaments: 5, region: "Cancún" }
    ],
    "womens-sub-15": [
      { rank: 1, change: 0, name: "Camila Vargas", points: 2620, tournaments: 8, region: "Mexico City" },
      { rank: 2, change: 0, name: "Isabella Mendoza", points: 2550, tournaments: 7, region: "Monterrey" },
      { rank: 3, change: 2, name: "Valentina Córdova", points: 2480, tournaments: 6, region: "Guadalajara" },
      { rank: 4, change: -1, name: "Ximena Torres", points: 2390, tournaments: 7, region: "Puebla" },
      { rank: 5, change: -1, name: "Paula Ramírez", points: 2320, tournaments: 5, region: "Mexico City" },
      { rank: 6, change: 0, name: "María José Sánchez", points: 2240, tournaments: 6, region: "Tijuana" },
      { rank: 7, change: 1, name: "Lucía Martínez", points: 2175, tournaments: 5, region: "Guadalajara" },
      { rank: 8, change: -1, name: "Elena Castro", points: 2110, tournaments: 4, region: "Monterrey" },
      { rank: 9, change: 0, name: "Ana Paula González", points: 2050, tournaments: 5, region: "Mexico City" },
      { rank: 10, change: 0, name: "Renata Flores", points: 1975, tournaments: 4, region: "Cancún" }
    ]
  };
  
  // Mock data for Circuito Borregos Rankings
  const borregosRankingsData = {
    "mens-college": [
      { rank: 1, change: 0, name: "Marco Antonio Ruiz", points: 2850, tournaments: 8, region: "Tec Monterrey" },
      { rank: 2, change: 1, name: "José Luis Hernández", points: 2780, tournaments: 7, region: "UNAM" },
      { rank: 3, change: -1, name: "Francisco Soto", points: 2695, tournaments: 8, region: "Tec Guadalajara" },
      { rank: 4, change: 0, name: "Raúl Mendoza", points: 2610, tournaments: 6, region: "ITAM" },
      { rank: 5, change: 2, name: "Arturo Vázquez", points: 2540, tournaments: 7, region: "Tec Monterrey" },
      { rank: 6, change: -1, name: "Óscar Morales", points: 2470, tournaments: 6, region: "Anáhuac" },
      { rank: 7, change: -1, name: "Adrián Torres", points: 2390, tournaments: 7, region: "UNAM" },
      { rank: 8, change: 0, name: "Gerardo Ramírez", points: 2315, tournaments: 5, region: "Tec Guadalajara" },
      { rank: 9, change: 1, name: "Ricardo Estrada", points: 2240, tournaments: 6, region: "ITAM" },
      { rank: 10, change: -1, name: "Víctor Flores", points: 2175, tournaments: 5, region: "Tec Monterrey" }
    ],
    "womens-college": [
      { rank: 1, change: 1, name: "Mariana González", points: 2780, tournaments: 7, region: "Tec Monterrey" },
      { rank: 2, change: -1, name: "Daniela Flores", points: 2715, tournaments: 8, region: "UNAM" },
      { rank: 3, change: 0, name: "Alejandra Soto", points: 2645, tournaments: 6, region: "Tec Guadalajara" },
      { rank: 4, change: 0, name: "Paola Mendoza", points: 2570, tournaments: 7, region: "ITAM" },
      { rank: 5, change: 2, name: "Fernanda Vázquez", points: 2495, tournaments: 6, region: "Tec Monterrey" },
      { rank: 6, change: -1, name: "Regina Morales", points: 2420, tournaments: 5, region: "Anáhuac" },
      { rank: 7, change: -1, name: "Sara Torres", points: 2350, tournaments: 6, region: "UNAM" },
      { rank: 8, change: 0, name: "Carolina Ramírez", points: 2280, tournaments: 5, region: "Tec Guadalajara" },
      { rank: 9, change: 1, name: "Andrea Estrada", points: 2210, tournaments: 4, region: "ITAM" },
      { rank: 10, change: -1, name: "Sofía Flores", points: 2135, tournaments: 5, region: "Tec Monterrey" }
    ],
    "mens-junior": [
      { rank: 1, change: 0, name: "Juan Pablo Sánchez", points: 2510, tournaments: 6, region: "Tec Monterrey" },
      { rank: 2, change: 0, name: "Miguel Ángel López", points: 2445, tournaments: 5, region: "UNAM" },
      { rank: 3, change: 1, name: "Diego Martínez", points: 2380, tournaments: 6, region: "Tec Guadalajara" },
      { rank: 4, change: -1, name: "Eduardo González", points: 2315, tournaments: 5, region: "ITAM" },
      { rank: 5, change: 0, name: "Gustavo Hernández", points: 2250, tournaments: 4, region: "Tec Monterrey" },
      { rank: 6, change: 2, name: "Ángel Torres", points: 2180, tournaments: 5, region: "Anáhuac" },
      { rank: 7, change: -1, name: "Rodrigo Ramírez", points: 2115, tournaments: 4, region: "UNAM" },
      { rank: 8, change: -1, name: "Javier Morales", points: 2045, tournaments: 3, region: "Tec Guadalajara" },
      { rank: 9, change: 0, name: "Emilio Vega", points: 1980, tournaments: 4, region: "ITAM" },
      { rank: 10, change: 0, name: "Sergio Castro", points: 1920, tournaments: 3, region: "Tec Monterrey" }
    ],
    "womens-junior": [
      { rank: 1, change: 0, name: "Ana Paula Vázquez", points: 2480, tournaments: 6, region: "Tec Monterrey" },
      { rank: 2, change: 2, name: "Carla Mendoza", points: 2415, tournaments: 5, region: "UNAM" },
      { rank: 3, change: -1, name: "Paulina Soto", points: 2350, tournaments: 5, region: "Tec Guadalajara" },
      { rank: 4, change: -1, name: "Victoria González", points: 2285, tournaments: 4, region: "ITAM" },
      { rank: 5, change: 0, name: "Luisa Fernanda Torres", points: 2220, tournaments: 5, region: "Tec Monterrey" },
      { rank: 6, change: 0, name: "María José Martínez", points: 2150, tournaments: 4, region: "Anáhuac" },
      { rank: 7, change: 1, name: "Daniela Hernández", points: 2085, tournaments: 3, region: "UNAM" },
      { rank: 8, change: -1, name: "Pamela Ramírez", points: 2020, tournaments: 4, region: "Tec Guadalajara" },
      { rank: 9, change: 0, name: "Julia Morales", points: 1950, tournaments: 3, region: "ITAM" },
      { rank: 10, change: 0, name: "Renata Castro", points: 1890, tournaments: 2, region: "Tec Monterrey" }
    ],
}

//const of all info about news 
const newsData = [
    {
        title: "National Ranking Update",
        date: "2023-10-01",
        content: "The latest national rankings have been updated. Check out the new standings!",
        image: "./images/news1.jpg"
    },
    {
        title: "Circuito Borregos Tournament Results",
        date: "2023-09-15",
        content: "The results from the recent Circuito Borregos tournament are now available.",
        image: "./images/news2.jpg"
    },
    {
        title: "Upcoming Events",
        date: "2023-10-05",
        content: "Don't miss the upcoming events in the next month. Check the calendar for details.",
        image: "./images/news3.jpg"
    }
];
//const of all info about events
const eventsData = [
    {
        title: "National Championship",
        date: "2023-11-20",
        location: "Mexico City",
        description: "Join us for the National Championship, where top players from across the country will compete.",
        image: "./images/event1.jpg"
    },
    {
        title: "Circuito Borregos Finals",
        date: "2023-12-05",
        location: "Monterrey",
        description: "The finals of the Circuito Borregos will take place in Monterrey. Don't miss it!",
        image: "./images/event2.jpg"
    },
    {
        title: "Training Camp",
        date: "2023-10-15",
        location: "Guadalajara",
        description: "A training camp for all levels will be held in Guadalajara. Sign up now!",
        image: "./images/event3.jpg"
    }
];
// const of all players data
const playersData = [
    {
        name: "Ricardo Villa",
        age: 25,
        region: "Mexico City",
        ranking: "1",
        image: "./images/player1.jpg"
    },
    {
        name: "Eduardo Martínez",
        age: 22,
        region: "Monterrey",
        ranking: "2",
        image: "./images/player2.jpg"
    },
    {
        name: "Gabriel Sánchez",
        age: 23,
        region: "Guadalajara",
        ranking: "3",
        image: "./images/player3.jpg"
    }
];
// Function to get all players data
export const getFeaturedPlayer = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(playersData);
        }, 1000); // Simulating network delay
    });
};

// Function to get all news data
export const getNewsItems = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(newsData);
        }, 1000); // Simulating network delay
    });
};

// Function to get all events data


// Function to fetch National Rankings data
export const fetchNationalRankings = (category) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (nationalRankingsData[category]) {
                resolve(nationalRankingsData[category]);
            } else {
                reject(new Error("Category not found"));
            }
        }, 1000); // Simulating network delay
    });
};
// Function to fetch Circuito Borregos Rankings data
export const fetchBorregosRankings = (category) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (borregosRankingsData[category]) {
                resolve(borregosRankingsData[category]);
            } else {
                reject(new Error("Category not found"));
            }
        }, 1000); // Simulating network delay
    });
};
// Function to fetch all categories for a given ranking type
export const fetchAllCategories = (type) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (type === "national") {
                resolve(Object.keys(nationalRankingsData));
            } else if (type === "borregos") {
                resolve(Object.keys(borregosRankingsData));
            } else {
                reject(new Error("Type not found"));
            }
        }, 1000); // Simulating network delay
    });
};

// Function to fetch all ranking types
export const fetchAllRankingTypes = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(["national", "borregos"]);
        }, 1000); // Simulating network delay
    });
};

// Function to get ranking data 
export const getRankingsData = async (type, category) => {
    try {
        let data;
        if (type === "national") {
            data = await fetchNationalRankings(category);
        } else if (type === "borregos") {
            data = await fetchBorregosRankings(category);
        } else {
            throw new Error("Invalid ranking type");
        }
        return data;
    } catch (error) {
        console.error("Error fetching ranking data:", error);
        throw error;
    }
};