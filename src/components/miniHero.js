import React from "react"
import "../styles/components/MiniHero.scss"

const miniHero = ({ url, title, description }) => {
  return (
    <>
      <div
        className="miniHero__container"
        style={{ background: `url(${url})` }}
      >
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </>
  )
}

export default miniHero
