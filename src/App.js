import Header from './components/StaticComponents/Header/Header'
import Footer from './components/StaticComponents/Footer/Footer'
//import Events from './components/Static Components/Events'


import UploadNews from './components/DynamicComponents/Upload News/UploadNews'
import './App.css';

import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const Events = React.lazy(() => import('./components/StaticComponents/Events/Events'))
const MainPage = React.lazy(() => import('./components/DynamicComponents/Main Page/MainPage')) 
const AboutUs = React.lazy(() => import('./components/StaticComponents/AboutUs/AboutUs')) 


function App() {


  return (
    <main className='Main_View'>
      <Header />
      <div className='Grid'>
      
      
      </div>

      <BrowserRouter>
        <Routes>
          <Route path={'/'} Component={MainPage}></Route>
          <Route path={'/Calendario'} Component={Events}></Route>
          <Route path={'/Acerca'} Component={AboutUs}></Route>
        </Routes>
      </BrowserRouter>
    
      <aside className='bloque_derecha'></aside>

      
      <Footer />
      
        
      
    </main>
  );
}

export default App;
