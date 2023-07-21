import React from 'react'
import { Fondo } from './Fondo'
import logo from '../images/logo.png'
import face from '../images/face.png'
import instagram from '../images/instagram.jpg'
import tiktok from '../images/tiktok.png'

function Contacto() {
  return (
    <div>
      <Fondo />
      <div className="contact">
        <p>
          Vereda el Cofre, Parcelación la
          Margarita, Finca Santa María,
          Casa 1, Popayán, Cauca 190002,
          CO
        </p>
        <p>
          comunicaciones@cdtcreatic.com
        </p>
      </div>
      <div className="logo-Crea">
          <img className="logo-CreaTIC" src={logo} alt="logo-CreaTIC" />
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
          .contact {
            width: 45%;
            padding: 3%;
            position: absolute;
            z-index: 3;
            left: 10%;
            top: 40%;
            box-shadow: 2px 2px 2px 2px;
            border-radius: 12px;
          }
          .contact p {
            font-size: 1.5rem;
            font-weight: bold;
          }
          .logo-Crea {
            width: 35%;
            position: absolute;
            z-index: 3;
            left: 60%;
            top: 40%;
            background-color: rgba(255, 255, 255, .5);
            box-shadow: 2px 2px 2px 2px;
            border-radius: 12px;
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

export default Contacto;