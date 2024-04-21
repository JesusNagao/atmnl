import React, { useState, useEffect } from "react"
import '../App.css'

export default function Ult_Noticias() {
 return(
    <div className='Ultimas_Noticias'>
        {images.map((imageUrl, index) => (
            <img key={index} src={imageUrl} alt={'Imagen ${index + 1}'}/>
        ))}
        <img src='/images/Circuito_Borregos.png' alt ="img_ultimasNoticias" className='img_ultimas_noticias'></img>
    </div>      
 );
}