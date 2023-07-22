import React from 'react'
import { Fondo } from './Fondo';
import mapa from '../images/mapa.png'
import rio from '../images/Río_Cauca.jpg'
import colibri from '../images/colibri.jpg'
import guambia from '../images/guambia.jpg'
import face from '../images/face.png'
import instagram from '../images/instagram.jpg'
import tiktok from '../images/tiktok.png'
import '../css/inicio.css'

function Inicio() {
  return (
    <div>
      <div className="fondo">
        <Fondo/>
      </div>
      <main>        
        <img className='mapa' src={mapa} alt="mapa-cauca" />
        <div className="imagenes">
          <img className="rio" src={rio} alt="rio-cauca" />
          <div className="fotos">
            <img src={colibri} alt="ave" className="animales" />
            <img src={guambia} alt="resguardo" className="personas" />
          </div>
        </div>
        <div className="follow">
          <h3>Siguenos: </h3>
          <div className="redes">
            <img src={face} alt="face" className="logo" />
            <img src={instagram} alt="insta" className="logo" />
            <img src={tiktok} alt="tik" className="logo" />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Inicio;