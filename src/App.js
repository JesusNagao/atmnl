import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/StaticComponents/Header/Header';
import Footer from './components/StaticComponents/Footer/Footer';
import routes from './routes/routes';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <main className="app-content" style={{ paddingTop: '80px', paddingBottom: '60px' }}>
        <Routes>
          {routes.map(({ path, element }, index) => (
            <Route key={index} path={path} element={element} />
          ))}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
