import Header from './components/Static Components/Header'
import Footer from './components/Static Components/Footer'
import News from './components/Dynamic Components/News'
import Ult_Noticias from './Tabs/Ultimas_Noticias'
import Eventos_prox from './Tabs/Eventos_Proximos'
import UploadNews from './components/Dynamic Components/UploadNews'
import './App.css';

function App() {
  
  return (
    <main className='Main_View'>
      <Header />
      <div className='Grid'>
      
      
      </div>

      <UploadNews />
    
      <aside className='bloque_derecha'></aside>
        
      <Footer />
    </main>
  );
}

export default App;
