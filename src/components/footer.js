import React from "react"
import "../styles/components/Footer.scss"
import MadColor from "../images/mad-color.svg"
import fbIcon from "../images/fbIcon.svg"
import instagramIcon from "../images/instagramIcon.svg"
import youtubeIcon from "../images/youtubeIcon.svg"
import twitterIcon from "../images/twitterIcon.svg"

const Footer = () => {
  return (
    <footer>
      <div className="Footer">
        <div className="Footer__img">
          <img src={MadColor} alt="" />
        </div>
        <div className="Footer__info">
          <ul>
            <li>Nuestras Oficinas</li>
          </ul>
          <ul>
            <li>Av. Caminos del Inca 390 Of.502</li>
            <li>Santiago de Surco, Lima - PERU </li>
            <li>(501) 702-0965 </li>
            <li>hola@themadmedia.com</li>
          </ul>
        </div>
        <div className="Footer__social">
          <ul>
            <li>Redes Sociales</li>
          </ul>
          <ul>
            <li>
              <img src={fbIcon} alt="" />
            </li>
            <li>
              <img src={instagramIcon} alt="" />
            </li>
            <li>
              <img src={youtubeIcon} alt="" />
            </li>
            <li>
              <img src={twitterIcon} alt="" />
            </li>
          </ul>
        </div>
      </div>
      <div className="Footer__copyright">
        <p>@ 2019 MadMedia - Producción Multimedia de Alta Calidad</p>
      </div>
    </footer>
  )
}

export default Footer
