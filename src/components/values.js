import React from "react"
import imageValues from "../images/creativeteam.svg"
import "../styles/components/Values.scss"

const Values = () => {
  return (
    <>
      <div className="Values__container">
        <div className="Values__image">
          <img src={imageValues} alt="" />
        </div>
        <div className="Values__description">
          <div className="Values__items">
            <span>01</span>
            <p>
              La agilidad y el trabajo en equipo se traduce en mejores
              resultados.
            </p>
          </div>
          <div className="Values__items">
            <span>02</span>
            <p>
              La agilidad y el trabajo en equipo se traduce en mejores
              resultados.
            </p>
          </div>
          <div className="Values__items">
            <span>03</span>
            <p>
              La agilidad y el trabajo en equipo se traduce en mejores
              resultados.
            </p>
          </div>
          <div className="Values__items">
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

export default Values
