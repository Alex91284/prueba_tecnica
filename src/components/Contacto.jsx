import React from 'react'
import { Fondo } from './Fondo'
import logo from '../images/logo.png'
import face from '../images/face.png'
import instagram from '../images/instagram.jpg'
import tiktok from '../images/tiktok.png'

function Contacto() {
  return (
    <div>
      <div className="fondo">
        <Fondo/>
      </div>
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
            width: 35%;
            padding: 3%;
            position: absolute;
            z-index: -1;
            top: 15%;
            border-radius: 12px;
            box-shadow: 2px 2px 2px 2px;
            border-radius: 12px;
            left:10%;
            top: 25%;
          }
          .contact p {
            font-size: 1.5rem;
            font-weight: bold;
          }
          .logo-Crea {
            width: 40%;
            position: absolute;
            z-index: -1;
            left: 55%;
            top: 35%;
            background-color: rgba(255, 255, 255, .5);
            box-shadow: 2px 2px 2px 2px;
            border-radius: 12px;
          }
          .logo-CreaTIC {
            width: 80%;
          }
          .follow {
            width: 40%;
            padding: 1.5%;
            position: absolute;
            display: flex;
            z-index: 3;
            left: 55%;
            top: 75%;
            box-shadow: 2px 2px 2px 2px;
            border-radius: 12px;
            color: #000;
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
          @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
            .contact {
              width: 100%;
              padding: 3%;
              position: absolute;
              z-index: -1;
              left: 0%;
              top: 15%;
              border-radius: 12px;
            }
            .contact p {
              font-size: 1.5rem;
              font-weight: bold;
            }
            .logo-Crea {
              width: 90%;
              position: absolute;
              z-index: -1;
              left: 5%;
              top: 50%;
              background-color: rgba(255, 255, 255, .5);
              box-shadow: 2px 2px 2px 2px;
              border-radius: 12px;
            }
            .logo-CreaTIC {
              width: 80%;
            }
            .follow {
              width: 80%;
              padding: 1.5%;
              position: absolute;
              display: flex;
              z-index: 3;
              left: 10%;
              top: 75%;
              box-shadow: 2px 2px 2px 2px;
              border-radius: 12px;
              color: #000;
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
          }
        `}
      </style>
    </div>
  );
}

export default Contacto;