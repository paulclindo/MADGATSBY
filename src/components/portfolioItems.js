import React from "react"
import "../styles/components/Portfolio.scss"

const PortfolioItems = props => {
  const { title, company, poster, link } = props
  return (
    <>
      <div className="PortfolioItem__wrapper">
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
