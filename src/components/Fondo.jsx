import React from 'react'
import fondo from '../images/fondo.jpg'

export const Fondo = () => {
  return (
      <div>
        <img src={fondo} alt="" />
          <style jsx>
              {`
                img {
                    width: 100%;
                    opacity: .5;
                }
              `}
        </style>
    </div>
  )
}
