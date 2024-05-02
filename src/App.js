import Header from './components/Header'
import Footer from './components/Footer'
import Ult_Noticias from './Tabs/Ultimas_Noticias'
import Eventos_prox from './Tabs/Eventos_Proximos'
import './App.css';

function App() {
  
  return (
    <main className='Main_View'>
      <Header />
      <div className='Grid'>
      <img src='/images/Circuito_Borregos.png' alt ="img_ultimasNoticias" className='img_ultimas_noticias'></img>

      </div>
      <div className='Eventos_Proximos'></div>
      <div className='Ultimos_Videos'></div>
    
    
      <aside className='bloque_derecha'></aside>
        
      <Footer />
    </main>
  );
}

export default App;
