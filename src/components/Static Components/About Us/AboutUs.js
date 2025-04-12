import './AboutUs.css';
//import Nagao from 'C:\\Users\\Jesus Leobardo Nagao\\Documents\\atmnl\\src\\assets\\About Us\\Nagao.jpg';
//import Andrew from 'C:\\Users\\Jesus Leobardo Nagao\\Documents\\atmnl\\src\\assets\\About Us\\Andrew.jpg';
//import Panes from 'C:\\Users\\Jesus Leobardo Nagao\\Documents\\atmnl\\src\\assets\\About Us\\Panes.jpg';
/*<img src={Nagao} alt='Not Found' className='miembrosimg'></img>
<img src={Panes} alt='Not Found' className='miembrosimg'></img>
<img src={Andrew} alt='Not Found' className='miembrosimg'></img>*/
export default function AboutUs(){
    return(
        <div id='aboutus' className="aboutus">
            <h1>Historia</h1>
            <div className='miembros'>
                <h1>Miembros</h1>
                

                <div className='miembro'>
                    <h2>Presidente</h2>
                    <h3>Lic. Gerardo Ramon Panes</h3>
                    <p>Don Pendejo</p>
                </div>
                <div className='miembro'>
                    <h2>Secretario</h2>
                    <h3>Ing. Brandon Hernandez Bonilla</h3>
                    <p>Don Pendejo 2</p>
                </div>
                <div className='miembro'>
                    <h2>Vicepresidente</h2>
                    <h3>Andres Eduardo Moreira Lee</h3>
                    <p>Estudiante del Tecnológico de Monterrey, comenzó a practicar el  tenis de mes en esta institución en el año 2018. Representó a la selección NL en dos ocasiones. Consiguió medallas en Universiada Nacional y en categorías de 4ta Fuerza y Universiada Nacional.</p>
                </div>
                <div className='miembro'>
                    <h2>Tesorero</h2>
                    <h3>Lic. Rafael Meza</h3>
                    <p>El Machape</p>
                </div>
                <div className='miembro'>
                    <h2>Comisario</h2>
                    <h3>Lic. Alberto Martinez</h3>
                    <p>Pfaicito</p>
                </div>
                <div className='miembro'>
                    <h2>Vocal de Consejo</h2>
                    <h3>Lic. Eduardo Vargas</h3>
                    <p>El Machape</p>
                </div>
                <div className='miembro'>
                    <h2>Vocal Deportista</h2>
                    <h3>Ing. Jesus Leobardo Nagao Alvarez</h3>
                    <p>Egresado del Tecnologico de Monterrey comenzo a practicar el tenis de mesa en esta institucion logrando traer medallas de oro, plata y bronce para Nuevo Leon en las categorias Tercera Fuerza, Juegos Nacionales Conade y Universiada Nacional.</p>
                </div>
                
                    
            </div>            
            <h1>Contacto</h1>

        </div>
    );
}