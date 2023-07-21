import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addUser } from '../redux/userSlice'
import { v4 as uuid } from 'uuid'
import swal from 'sweetalert'
import { Fondo } from './Fondo'
import popayan from '../images/popayan.jpg'
import puma from '../images/puma.jpg'
import face from '../images/face.png'
import instagram from '../images/instagram.jpg'
import tiktok from '../images/tiktok.png'

function Registro() {
  const [user, setUser] = useState({
    email: "",
    password: ""
  })

  const dispatch = useDispatch()

  const handleChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    })
  } 
  const handleSubmint = (e) => {
    e.preventDefault()
    dispatch(addUser({
      id: uuid(),
      ...user,
    }))
  }

  const mosrtearAlerta = () => {
    swal({
      title: "FELICIDADES !!!",
      text: "El usuario fué registrado satisfactoriamente...",
      icon: "success",
      button: "Aceptar"
    })
  }
 
  return (
    <div>
      <Fondo />
      <form className="forma" onSubmit={handleSubmint}>
        <input type="text" name="email" placeholder='  Correo' onChange={handleChange}/>
        <input type="text" name='password' placeholder='  Contraseña' onChange={handleChange}/>
        <button name='btn_sesion'>Iniciar Sesión</button>
        <p>¿Olvido la contraseña?</p>
        <button className='registro' name='btn-registro' onClick={() => mosrtearAlerta()} >Registrarse</button>
      </form>
      <div className="imagenes">
        <p>
          Contenido multimedia muy llamativo
        </p>
        <div className="fotos">
          <img src={popayan} alt="city" className="poapayan" />
          <img src={puma} alt="puma" className="animal" />
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
      <style jsx>
        {`
          .forma {
            width: 40%;
            position: absolute;
            padding: 2%;
            z-index: 3;
            left: 10%;
            top: 30%;
            box-shadow: 2px 2px 2px 2px;
            border-radius: 12px;
          }
          .forma input {
            width: 100%;
            margin-bottom: 2%;
            background-color: rgba(183, 188, 187, .6);
            font-size: 1.5rem;
            font-weight:bold;
            border-radius: 12px;
          }
          .forma button {
            width: 100%;
            margin-bottom: 2%;
            background-color: rgb(216, 169, 8 );
            font-size: 1.5rem;
            font-weight:bold;
            border-radius: 12px;
          }
          .forma p {
            text-align: center;
            font-weight:bold;            
            font-size: 1.5rem;
          }
          .forma .registro {
            width: 100%;
            margin-bottom: 2%;
            background-color: rgba(183, 188, 187, .3);
            font-size: 1.5rem;
            font-weight:bold;
            border-radius: 12px;
          }
          .imagenes {
            width: 30%;
            position: absolute;
            padding: 2%;
            z-index: 3;
            left: 60%;
            top: 15%;
            background-color: rgba(255, 255, 255, .5);
            box-shadow: 2px 2px 2px 2px;
            border-radius: 12px;
          }
          .imagenes p{
            padding: 0% 4% ;
            font-size: 1.5rem;
            font-weight: bold
          }
          .popayan {
            width:100%;
            z-index: 3;
            left:60%;
            top: 20%;
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

export default Registro;