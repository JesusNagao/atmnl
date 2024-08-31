import './AboutUs.css';
import Nagao from 'C:\\Users\\Jesus Leobardo Nagao\\Documents\\atmnl\\src\\assets\\About Us\\Nagao.jpg';
import Andrew from 'C:\\Users\\Jesus Leobardo Nagao\\Documents\\atmnl\\src\\assets\\About Us\\Andrew.jpg';
import Panes from 'C:\\Users\\Jesus Leobardo Nagao\\Documents\\atmnl\\src\\assets\\About Us\\Panes.jpg';

export default function AboutUs(){
    return(
        <div id='aboutus' className="aboutus">
            <h1>Historia</h1>
            <div className='miembros'>
                <h1>Miembros</h1>
                <div className='miembro'>
                    <img src={Nagao} alt='Not Found' className='miembrosimg'></img>
                    <h2>Vocal Medallista</h2>
                    <h3>Ing. Jesus Leobardo Nagao Alvarez</h3>
                    <p>Egresado del Tecnologico de Monterrey comenzo a practicar el tenis de mesa en esta institucion logrando traer medallas de oro, plata y bronce para Nuevo Leon en las categorias Tercera Fuerza, Juegos Nacionales Conade y Universiada Nacional.</p>
                </div>

                <div className='miembro'>
                    <img src={Panes} alt='Not Found' className='miembrosimg'></img>
                    <h2>Presidente</h2>
                    <h3>Lic. Gerardo Ramon Panes</h3>
                    <p>Don Pendejo</p>
                </div>

                <div className='miembro'>
                    <img src={Andrew} alt='Not Found' className='miembrosimg'></img>
                    <h2>Vicepresidente</h2>
                    <h3>Andres Eduardo Moreira Lee</h3>
                    <p>Baia Baia</p>
                </div>
                    
            </div>            
            <h1>Contacto</h1>

        </div>
    );
}