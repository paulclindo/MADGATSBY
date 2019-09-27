import React from "react"
import imageValues from "../images/creativeteam.svg"
import "../styles/components/Cores.scss"

const Cores = () => {
  return (
    <>
      <div className="Cores__container">
        <div className="Cores__image">
          <img src={imageValues} alt="" />
        </div>
        <div className="Cores__description">
          <div className="Cores__items">
            <span>01</span>
            <p>
              La agilidad y el trabajo en equipo se traduce en mejores
              resultados.
            </p>
          </div>
          <div className="Cores__items">
            <span>02</span>
            <p>
              La agilidad y el trabajo en equipo se traduce en mejores
              resultados.
            </p>
          </div>
          <div className="Cores__items">
            <span>03</span>
            <p>
              La agilidad y el trabajo en equipo se traduce en mejores
              resultados.
            </p>
          </div>
          <div className="Cores__items">
            <span>04</span>
            <p>
              La agilidad y el trabajo en equipo se traduce en mejores
              resultados.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cores
