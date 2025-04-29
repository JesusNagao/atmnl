import React, {useState} from 'react';
import "./Login.css";

export default function Login(){
    const [isOpen, setIsOpen] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const togglePopup = () => {
      setIsOpen(!isOpen);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      const formData = new FormData(event.target);
      console.log('Email:', email, 'Password:', password);
      // Aquí podrías añadir lógica para verificar las credenciales
      togglePopup();  // Cierra el popup después de enviar el formulario
    };

    const handleEmailChange = (event) => {
       setEmail(event.target.value);
    };
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
     };

    const handleButtonClick = () => {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        // Do something with the email and password values;
    };

    // ...

    return(
        <div className="Login">
            <a onClick={togglePopup} >
                <p>Iniciar Sesion</p>    
            </a>
            {isOpen && (
                <div className="login-popup">
                    <div className="popup-content">
                        <span className="close" onClick={togglePopup}>&times;</span>
                        <img href="/App.js" className='ATMNL_Logo' src='./images/ATMNL.png' alt='atmnl.png'/>
                        <h1>Bienvenido a la Asociacion de Tenis de Mesa de Nuevo Leon</h1>
                    
                        <form id="login" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label for="email">Correo electrónico</label>
                                <div className="input-with-icon">
                                    <input type="email" id="email" placeholder="Correo" required value = {email} onChange={handleEmailChange}/>
                                    <i className="fas fa-envelope"></i> 
                                </div>
                            </div> 
                            
                            <div className="form-group">
                                <label for="Contraseña">Contraseña</label>
                                <div className="input-with-icon">
                                <input type="password" id="password" placeholder="Password" required value = {password} onChange={handlePasswordChange}/>
                                    <i className="fas fa-envelope"></i> 
                                </div>
                            </div> 
                            <button type="submit">Iniciar sesión</button>
                        </form>
                    </div>
                </div>
            )}
        </div>

        
    );
    console.log('Email', email, 'Password', password);
}