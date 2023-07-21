import React from 'react'
import { Fondo } from './Fondo'
import face from '../images/face.png'
import instagram from '../images/instagram.jpg'
import tiktok from '../images/tiktok.png'

function About() {
  return (
    <div>
      <Fondo />
      <div className="mision">
        <h2>Misión</h2>
        <p>
          La Misión define el propósito de la existencia de la empresa y lo
          que la diferencia de las demás. En otras palabras, tiene que ver con
          la propuesta de valor de un negocio.
        </p>
      </div>
      <div className="vision">
        <h2>Visión</h2>
        <p>
          La visión es el destino al que una empresa quiere llegar. En este
          sentido, establece los parámetros para la toma de decisiones de una
          empresa, las inversiones necesarias y la forma de definir estrategias.
        </p>
      </div>
      <div className="follow">
          <h3>Siguenos: </h3>
          <div className="redes">
            <img src={face} alt="face" className="logo" />
            <img src={instagram} alt="insta" className="logo" />
            <img src={tiktok} alt="tik" className="logo" />
          </div>
      </div>
      <style jsx>
        {`
          .mision {
            width: 70%;
            z-index: 3;
            margin-left: 15%;
            margin-top: -45%;
            font-size: 1.5rem;
            font-weight: bold;
            text-align: justify;
          }
          .vision {
            width: 70%;
            z-index: 3;
            margin-left: 15%;
            margin-top: 7%;
            font-size: 1.5rem;
            font-weight: bold;
            text-align: justify;
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

export default About;