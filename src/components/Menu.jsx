import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
    return (
        <div className="menu">
            <nav>
                <ul>
                    <li className='inicio'>
                        <Link to="/">Inicio</Link>
                    </li>
                    <li className='somos'>
                        <Link to="about">Quienes Somos</Link>
                    </li>
                    <li className='contacto'>
                        <Link to="contact">Contactanos</Link>
                    </li>
                    <li className='registro'>
                        <Link to="register">Registrarse</Link>
                    </li>
                </ul>
            </nav>
            <style jsx>{`
                .menu{
                    width: 100%;
                    padding: 0%;
                    margin: 0%;
                    height: 75px;
                    font-size: 1.5rem;
                    background-color: #CACAC7;
                }
                .menu nav ul{
                    display: flex;
                    list-style: none;
                }
                .menu nav ul .inicio {
                    margin-left: 7%;
                    margin-top: 1.5%;
                    margin-right:10%
                }
                .menu nav ul .somos {
                    margin-left: 5%;
                    margin-top: 1.5%;
                    margin-right:10%
                }
                .menu nav ul .contacto {
                    margin-left: 5%;
                    margin-top: 1.5%;
                    margin-right:10%
                }
                .menu nav ul .registro {
                    margin-left: 5%;
                    margin-top:1.5%;
                    margin-right:10%
                }
                .menu nav ul li a{
                    margin-top: 20%;
                    text-decoration: none;
                    color: #000;
                    font-weight: bold;
                }
                .menu nav ul li:hover {
                    text-decoration: underline;
                }
                .menu nav ul li:active {
                    text-decoration: underline;
                }
            `}
            </style>
        </div>
    )
}
export default Menu