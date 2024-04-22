import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Acerca from './Tabs/Acerca'
import Calendario from './Tabs/Calendario'
import Eventos from './Tabs/Eventos'
import Noticias from './Tabs/Noticias'
import Ranking from './Tabs/Ranking'

/*import Ult_Noticias from './components/Ultimas_Noticias'
import Eventos_prox from './components/Eventos_Proximos'*/
import './App.css';

function App() {
  
  return (
    <Router>
      <main className='Main_View'>
        <Header />
        <Routes>
          <Route path="/acerca" Component={Acerca}/>
        </Routes>
        <div className='Grid'>
          <img src='/images/Circuito_Borregos.png' alt ="img_ultimasNoticias" className='img_ultimas_noticias'></img>

          </div>
          <div className='Eventos_Proximos'></div>
          <div className='Ultimos_Videos'></div>
        
        
          <aside className='bloque_derecha'></aside>
        <Footer />
      </main>
    </Router>
  );
}

export default App;
