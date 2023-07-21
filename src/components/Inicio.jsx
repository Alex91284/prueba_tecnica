import React from 'react'
import { Fondo } from './Fondo';
import mapa from '../images/mapa.png'
import rio from '../images/Río_Cauca.jpg'
import colibri from '../images/colibri.jpg'
import guambia from '../images/guambia.jpg'
import face from '../images/face.png'
import instagram from '../images/instagram.jpg'
import tiktok from '../images/tiktok.png'

function Inicio() {
  return (
    <div>
      <Fondo/>
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
      <style jsx>
        {`
          main {
            width: 100%;
            display: flex;
          }
          main .mapa {
            width: 45%;
            position: absolute;
            z-index: 3;
            left: 10%;
            top: 20%;
            box-shadow: 2px 2px 2px 2px;
            border-radius: 12px;
          }
          main .imagenes {
            width: 30%;
            position: absolute;
            z-index: 3;
            left: 60%;
            top: 20%;
            background-color: rgba(255, 255, 255, .5);
            box-shadow: 2px 2px 2px 2px;
            border-radius: 12px;
          }
          .rio {
            width:100%;
            z-index: 3;
            left:60%;
            top: 20%;
          }
          .fotos {
            width: 100%;
            display: flex;

          }
          .animales {
            width: 40%;
            margin-top:3%;
            margin-right: 3%; 
          }
          .personas {
            width: 45%;
            margin-top:3%;
          }
          .follow {
            width: 35%;
            padding: 1.5%;
            position: absolute;
            display: flex;
            z-index: 3;
            left: 60%;
            top: 100%;
            box-shadow: 2px 2px 2px 2px;
            border-radius: 12px;
            color: #fff;
          }
          .follow h3 {
            margin-left: 10%;
          }
          .redes {
            display: flex;
            margin-left: 5%;
          }
          .logo {
            width: 10%;
            margin-right: 20%;
            border-radius: 5px
          }
        `}
      </style>
    </div>
  );
}

export default Inicio;