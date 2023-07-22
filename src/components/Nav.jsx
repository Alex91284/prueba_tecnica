import React, { useState} from 'react'
import { Link } from 'react-router-dom'
import '../css/Nav.css'

export const Nav = () => {
  const [ isOpen, setIsOpen ] = useState(false)
  return (
    <div className="navbar">
      <div className={`nav_items ${isOpen && 'open'}`}>
        <Link to="/">Inicio</Link>        
        <Link to="about">Quienes Somos</Link>        
        <Link to="contact">Contactos</Link>        
        <Link to="register">Registrarse</Link>        
      </div>
      <div className={`nav_toggle ${isOpen && 'open'}`} onClick={ () => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      
    </div>
  )
}
