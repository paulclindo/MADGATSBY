import React, { Component } from "react"
import Glider from "glider-js/glider"
import "glider-js/glider.css"
import "../styles/components/Carousel.scss"
import logoEntel from "../images/logo-entel.png"
import logoComex from "../images/logo-comex.png"
import logoFintlex from "../images/logo-fintlex.png"
import logoMinisterio from "../images/logo-ministerio.png"
import logoOutdoor from "../images/logo-outdoor.png"

class BrandCarousel extends Component {
  constructor(props) {
    super(props)
    this.BrandCarousel = React.createRef(null)
    this.dots = React.createRef(null)
    this.gliderPrev = React.createRef(null)
    this.gliderNext = React.createRef(null)
  }
  componentDidMount() {
    const $BrandCarousel = this.BrandCarousel.current
    const $dots = this.dots.current
    const $gliderPrev = this.gliderPrev.current
    const $gliderNext = this.gliderNext.current

    new Glider($BrandCarousel, {
      slidesToShow: 4,
      slidesToScroll: 1,
      dots: $dots,
      // exactWidth: 500,
      draggable: true,
      arrows: {
        prev: $gliderPrev,
        next: $gliderNext,
      },
    })
  }

  render() {
    return (
      <>
        <div className="glider-contain ">
          <div className="glider" ref={this.BrandCarousel}>
            <div className="BrandCarousel__item">
              <img src={logoEntel} alt="" />
            </div>
            <div className="BrandCarousel__item">
              <img src={logoComex} alt="" />
            </div>
            <div className="BrandCarousel__item">
              <img src={logoFintlex} alt="" />
            </div>
            <div className="BrandCarousel__item">
              <img src={logoMinisterio} alt="" />
            </div>
            <div className="BrandCarousel__item">
              <img src={logoOutdoor} alt="" />
            </div>
          </div>

          <button
            role="button"
            aria-label="Previous"
            ref={this.gliderPrev}
            className="glider-prev"
          >
            «
          </button>
          <button
            role="button"
            aria-label="Next"
            className="glider-next"
            ref={this.gliderNext}
          >
            »
          </button>
          <div role="tablist" className="dots" ref={this.dots}></div>
        </div>
      </>
    )
  }
}

export default BrandCarousel
