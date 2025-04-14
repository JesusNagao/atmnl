import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowUp, ArrowDown, Minus, Star, Calendar, Award, Users, Info, Bell, Home, ChevronLeft } from 'lucide-react';
import './Ranking.css';
import { getRankingsData, getNewsItems, getFeaturedPlayer } from './data-service.js';

// Category name formatter
const formatCategoryName = (category) => {
  return category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
};

// Category Menu Component
const CategoryMenu = ({ categories, activeCategory, onCategoryChange }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h2 className="card-title">
          <Users className="card-title-icon" />
          Categories
        </h2>
      </div>
      <nav className="category-nav">
        {categories.map((category) => {
          const isActive = activeCategory === category;
          const categoryLinkClass = isActive ? 'category-link active' : 'category-link';
          
          return (
            <a 
              key={category} 
              href="#" 
              className={categoryLinkClass}
              onClick={(e) => {
                e.preventDefault();
                onCategoryChange(category);
              }}
            >
              {isActive && (
                <Star className="category-icon" />
              )}
              {formatCategoryName(category)}
            </a>
          );
        })}
      </nav>
    </div>
  );
};

// News Card Component
const NewsCard = ({ title, date, content, category }) => {
  let categoryClass = 'news-category';
  switch(category) {
    case "Tournament":
      categoryClass += ' tournament';
      break;
    case "Facilities":
      categoryClass += ' facilities';
      break;
    default:
      categoryClass += ' news';
  }

  return (
    <div className="news-item">
      <div className="news-item-header">
        <h3 className="news-item-title">{title}</h3>
        <span className={categoryClass}>
          {category}
        </span>
      </div>
      <p className="news-date">
        <Calendar className="news-date-icon" /> {date}
      </p>
      <p className="news-content">{content}</p>
    </div>
  );
};

// News Section Component
const NewsSection = ({ news }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h2 className="card-title">
          <Bell className="card-title-icon" />
          Latest News
        </h2>
      </div>
      <div className="card-body">
        {news.slice(0, 3).map((item) => (
          <NewsCard key={item.id} {...item} />
        ))}
        <div className="view-all-link">
          <a href="#" className="view-all-text">
            View all news →
          </a>
        </div>
      </div>
    </div>
  );
};

// Featured Player Component
const FeaturedPlayer = ({ player }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h2 className="card-title">
          <Award className="card-title-icon" />
          Featured Player
        </h2>
      </div>
      <div className="featured-player-container">
        <div className="player-profile">
          <div className="player-image-container">
            <img src="/api/placeholder/128/128" alt="Player profile" className="player-image" />
          </div>
          <h3 className="player-name">{player.name}</h3>
          <p className="player-rank">
            <Star className="player-rank-icon" /> 
            Rank #{player.rank} - {player.category}
          </p>
          
          <div className="player-details">
            <div className="player-detail-row">
              <span className="player-detail-label">Age</span>
              <span>{player.age}</span>
            </div>
            <div className="player-detail-row">
              <span className="player-detail-label">Club</span>
              <span>{player.club}</span>
            </div>
            <div className="player-detail-row">
              <span className="player-detail-label">Style</span>
              <span>{player.style}</span>
            </div>
            <div className="player-detail-row border-none">
              <span className="player-detail-label">Achievements</span>
              <span className="player-detail-value">{player.achievements}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Ranking Table Component
const RankingTable = ({ data, title }) => {
  if (!data || data.length === 0) {
    return (
      <div className="empty-rankings">
        <h3 className="empty-title">Coming Soon</h3>
        <p className="empty-description">The rankings for this category will be available soon.</p>
      </div>
    );
  }

  return (
    <div>
      <h2 className="ranking-title">{title} Rankings</h2>
      <div className="table-container">
        <table className="ranking-table">
          <thead className="table-header">
            <tr>
              <th className="table-header-cell">Rank</th>
              <th className="table-header-cell">Change</th>
              <th className="table-header-cell">Name</th>
              <th className="table-header-cell">Points</th>
              <th className="table-header-cell">Tournaments</th>
              <th className="table-header-cell">Region</th>
            </tr>
          </thead>
          <tbody>
            {data.map((player, index) => {
              let changeClass = 'change';
              let ChangeIcon = Minus;
              
              if (player.change > 0) {
                changeClass += ' up';
                ChangeIcon = ArrowUp;
              } else if (player.change < 0) {
                changeClass += ' down';
                ChangeIcon = ArrowDown;
              } else {
                changeClass += ' neutral';
              }
              
              const rowClass = index % 2 === 0 ? 'table-row even' : 'table-row odd';
              
              return (
                <tr key={player.rank} className={rowClass}>
                  <td className="table-cell rank">{player.rank}</td>
                  <td className={`table-cell ${changeClass}`}>
                    <ChangeIcon className="change-icon" /> {Math.abs(player.change)}
                  </td>
                  <td className="table-cell name">{player.name}</td>
                  <td className="table-cell">{player.points}</td>
                  <td className="table-cell">{player.tournaments}</td>
                  <td className="table-cell">{player.region}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="last-updated">
        <Info className="last-updated-icon" /> Last updated: April 12, 2025
      </div>
    </div>
  );
};

// Tournament Selector Component
const TournamentSelector = ({ options, selectedTournament, onChange }) => {
  return (
    <div className="tournament-selector">
      <label htmlFor="tournament-select" className="selector-label">
        <Calendar className="selector-label-icon" /> Select Tournament:
      </label>
      <select 
        id="tournament-select" 
        className="selector"
        value={selectedTournament}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="footer">
      <div className="max-width-container">
        <div className="footer-content">
          <div className="footer-grid">
            <div className="footer-section">
              <h3 className="footer-title">
                <Award className="footer-title-icon" />
                Table Tennis Rankings
              </h3>
              <p className="footer-description">
                The most comprehensive and up-to-date table tennis rankings for all categories.
              </p>
            </div>
            <div className="footer-section">
              <h3 className="footer-title">Quick Links</h3>
              <ul className="footer-links-list">
                <li className="footer-link-item"><a href="#" className="footer-link">Rankings</a></li>
                <li className="footer-link-item"><a href="#" className="footer-link">News</a></li>
                <li className="footer-link-item"><a href="#" className="footer-link">Events</a></li>
                <li className="footer-link-item"><a href="#" className="footer-link">Players</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h3 className="footer-title">Connect With Us</h3>
              <ul className="footer-links-list">
                <li className="footer-link-item"><a href="#" className="footer-link">Facebook</a></li>
                <li className="footer-link-item"><a href="#" className="footer-link">Twitter</a></li>
                <li className="footer-link-item"><a href="#" className="footer-link">Instagram</a></li>
                <li className="footer-link-item"><a href="#" className="footer-link">Contact Us</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-divider">
            <p>&copy; 2025 Table Tennis Rankings. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Main Rankings Page Component
export default function RankingsPage() {
  const { ratingType } = useParams();
  const navigate = useNavigate();
  
  const isNational = ratingType === 'national';
  const isBorregos = ratingType === 'circuito-borregos';
  
  // Set appropriate categories based on rating type
  const nationalCategories = [
    "mens-national", 
    "womens-national", 
    "mens-sub-19", 
    "womens-sub-19", 
    "mens-sub-15", 
    "womens-sub-15"
  ];
  
  const borregosCategories = [
    "mens-college", 
    "womens-college", 
    "mens-junior", 
    "womens-junior"
  ];
  
  const categories = isNational ? nationalCategories : borregosCategories;
  
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [selectedTournament, setSelectedTournament] = useState("feb-may-2025");
  const [rankingsData, setRankingsData] = useState({});
  const [newsItems, setNewsItems] = useState([]);
  const [featuredPlayer, setFeaturedPlayer] = useState(null);
  const [loading, setLoading] = useState(true);
  
  // Tournament options for Circuito Borregos
  const tournamentOptions = [
    { value: "feb-may-2025", label: "February-May 2025" },
    { value: "sep-dec-2024", label: "September-December 2024" },
    { value: "feb-may-2024", label: "February-May 2024" }
  ];
  
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // Fetch data using the data service
        const rankings = await getRankingsData(ratingType);
        const news = await getNewsItems(ratingType);
        const player = await getFeaturedPlayer(ratingType);
        
        setRankingsData(rankings);
        setNewsItems(news);
        setFeaturedPlayer(player);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, [ratingType]);
  
  // Handle back to selection
  const handleBackToSelection = () => {
    navigate('/ranking-selection');
  };

  return (
    <div className="app">
      <header className="rankings-header">
        <div className="max-width-container">
          <div className="header-content">
            <h1 className="header-title">
              <Award className="header-title-icon" />
              {isNational ? "National" : "Circuito Borregos"} Rankings
            </h1>
            <button 
              className="back-button"
              onClick={handleBackToSelection}
            >
              <ChevronLeft className="back-icon" />
              Back to Selection
            </button>
          </div>
        </div>
      </header>
      
      <main className="max-width-container main-content">
        <div className="three-column-layout">
          {/* Left sidebar - Categories */}
          <div className="left-sidebar">
            <CategoryMenu 
              categories={categories} 
              activeCategory={activeCategory} 
              onCategoryChange={setActiveCategory} 
            />
          </div>
          
          {/* Main Content - Rankings Table */}
          <div className="main-area">
            <div className="ranking-table-container">
              {isBorregos && (
                <TournamentSelector 
                  options={tournamentOptions}
                  selectedTournament={selectedTournament}
                  onChange={setSelectedTournament}
                />
              )}
              
              {loading ? (
                <div className="loading">Loading rankings data...</div>
              ) : (
                <RankingTable 
                  data={rankingsData[activeCategory]} 
                  title={formatCategoryName(activeCategory)} 
                />
              )}
            </div>
          </div>
          
          {/* Right sidebar - News and Player */}
          <div className="right-sidebar">
            {loading ? (
              <div className="loading">Loading data...</div>
            ) : (
              <>
                <NewsSection news={newsItems} />
                {featuredPlayer && <FeaturedPlayer player={featuredPlayer} />}
              </>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}