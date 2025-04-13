import React from 'react';
import Header from './components/StaticComponents/Header/Header'
import Footer from './components/StaticComponents/Footer/Footer'
//import Events from './components/Static Components/Events'

import { Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="page-wrapper">
      <Header />
      <main className="main-content">
        <Outlet /> {/* This renders the page component for the current route */}
      </main>
      <Footer />
    </div>
  );
}

export default App;

