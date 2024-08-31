import Header from './components/Static Components/Header/Header'
import Footer from './components/Static Components/Footer/Footer'
//import Events from './components/Static Components/Events'


import UploadNews from './components/Dynamic Components/Upload News/UploadNews'
import './App.css';

import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const Events = React.lazy(() => import('./components/Static Components/Events/Events'))
const MainPage = React.lazy(() => import('./components/Dynamic Components/Main Page/MainPage')) 
const AboutUs = React.lazy(() => import('./components/Static Components/About Us/AboutUs')) 


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
