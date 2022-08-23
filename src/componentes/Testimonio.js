import React from "react";
import '../styles/Testimonio.css'

function Testimonio(){

  return(
    <div className='contenedor-testimonio'>
      <img  className='imagen-testimonio' 
            src={require('../imagenes/Emma-Bostian.png')} 
            alt ='Foto de Emma'/>
      <div className='contenedor-text'>
        <p className='nombre'>Emma Bostian en Suecia</p>
        <p className='cargo'>Ingeniera de Software en Spotify</p>
        <p className='texto'>"Siempre me ha costado aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify."</p>
      </div>
    </div>  
    )
}

export default Testimonio;