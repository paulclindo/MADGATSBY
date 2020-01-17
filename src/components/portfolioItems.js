import React, { useEffect, useRef } from "react"
import "../styles/components/Portfolio.scss"
import AOS from "aos"
import "aos/src/js/aos"

const PortfolioItems = props => {
  AOS.init({
    offset: 200,
    duration: 1000,
  })
  const { title, company, poster, link } = props

  return (
    <>
      <div className="PortfolioItem" data-aos="fade-left">
        <img className="PortfolioItem__image" src={poster} alt={title} />
        <div className="PortfolioItem__text">
          <p>{title}</p>
          <p>{company}</p>
        </div>
        <div className="PortfolioItem__overlay"></div>
        <a href={link} target="_blank" className="PortfolioItem__button">
          <div>Ver Proyecto &mdash;</div>
        </a>
      </div>
    </>
  )
}

export default PortfolioItems
