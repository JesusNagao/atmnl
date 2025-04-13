import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from '../components/DynamicComponents/MainPage/MainPage.js';
import Federation from '../components/StaticComponents/AboutUs/AboutUs.js';
import Calendar from '../components/StaticComponents/Events/Events';
import Ranking from '../components/DynamicComponents/Ranking/Ranking';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<MainPage />} />
    <Route path="/federacion" element={<Federation />} />
    <Route path="/calendario" element={<Calendar />} />
    <Route path="/ranking" element={<Ranking />} />
  </Routes>
);

export default AppRoutes;
