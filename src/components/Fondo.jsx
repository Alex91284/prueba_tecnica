import React from 'react'
import fondo from '../images/fondo.jpg'

export const Fondo = () => {
  return (
      <div className='fondo_app'>
        <img src={fondo} alt="" className="fondo_imagen" />
          <style jsx>
              {`
                .fondo_imagen {
                    width: 100%;
                    opacity: .5;
                }
                @media(max-width: 767px){
                  .fondo_app {
                    background-color: #fff;
                    margin-botton: -2000px;
                  }
                  .fondo_imagen {
                    visibility: hidden;
                    margin-botton: -2000px;
                  }
                }
              `}
        </style>
    </div>
  )
}
