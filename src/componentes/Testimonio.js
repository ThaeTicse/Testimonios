import React from "react";
import '../styles/Testimonio.css'

function Testimonio(props){

  return(
    <div className='contenedor-testimonio'>
      <img  className='imagen-testimonio' 
            src={require(`../imagenes/${props.imagen}.png`)} 
            alt ='Foto de Emma'/>
      <div className='contenedor-texto'>
        <p className='nombre'> 
          <strong>{props.nombre}</strong> en {props.pais}
        </p>
        <p className='cargo'>
          {props.cargo} en <strong>{props.empresa}</strong>
        </p>
        <p className='texto'>
          "{props.testimonio}"
        </p>
      </div>
    </div>  
    )
}

export default Testimonio;