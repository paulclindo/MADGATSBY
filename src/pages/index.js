import React from "react"
import "../styles/Global.scss"
import "../styles/Home.scss"

import Hero from "../components/hero"
import Services from "../components/services"
import SEO from "../components/seo"
import Portfolio from "../components/portfolio"
import PortfolioItems from "../components/portfolioItems"
import BrandCarousel from "../components/brandcarousel"
import Values from "../components/values"
import CallAction from "../components/callaction"
import { useRef } from "react"
import useOnScreen from "../hooks/useOnScreen"

const IndexPage = () => {
  const ref = useRef()
  const onScreen = useOnScreen(ref, { threshold: [0.5, 0.6] })
  return (
    <>
      <SEO title="Home" />
      <div
        className="Hero-content"
        style={{
          opacity: onScreen ? 0.5 : 1,
          transition: ".8s",
        }}
      >
        <Hero />
      </div>
      <div
        className="services-container"
        ref={ref}
        style={{
          background: onScreen ? "rgba(84, 143, 169, 0.82)" : "#fff",
          transition: ".8s",
          opacity: onScreen ? 1 : 0.5,
        }}
      >
        <div
          className="title-section"
          style={{
            color: onScreen ? "#fff" : "#000",
            transition: ".8s",
          }}
        >
          Nuestros Servicios
        </div>
        <Services />
      </div>
      <div className="title-section">Nuestros Trabajos Recientes</div>
      <Portfolio>
        <PortfolioItems
          title="Factoring"
          company="Abraham Carpio"
          poster="https://images.pexels.com/photos/7357/startup-photos.jpg?cs=srgb&dl=businesswoman-company-concept-7357.jpg&fm=jpg"
          link="https://pisogerencial.reactionpages.com/EP01-Factoring/"
        />
        <PortfolioItems
          title="Finanzas"
          company="Finanzas para tu Bolsillo"
          poster="https://images.pexels.com/photos/1332191/pexels-photo-1332191.jpeg?cs=srgb&dl=banking-card-credit-card-1332191.jpg&fm=jpg"
          link="https://pisogerencial.reactionpages.com/EP01-Factoring/"
        />
        <PortfolioItems
          title="Transformación Digital"
          company="Vamos por más"
          poster="https://images.pexels.com/photos/1081225/pexels-photo-1081225.jpeg?cs=srgb&dl=adult-analysis-brainstorming-1081225.jpg&fm=jpg"
          link="https://pisogerencial.reactionpages.com/EP01-Factoring/"
        />
        <PortfolioItems
          title="Blockchain"
          company="Piso Gerencial"
          poster="https://images.pexels.com/photos/261949/pexels-photo-261949.jpeg?cs=srgb&dl=administration-articles-bank-261949.jpg&fm=jpg"
          link="https://pisogerencial.reactionpages.com/EP01-Factoring/"
        />
      </Portfolio>
      <div className="title-section">Con quienes hemos venido trabajando</div>
      <BrandCarousel />
      <div className="title-section">¿Por qué somos diferentes?</div>
      <Values />
      <CallAction />
    </>
  )
}

export default IndexPage
