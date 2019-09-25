import React, { Component } from "react"
import "../styles/components/Services.scss"
import MomentumSlider from "momentum-slider"

class Services extends Component {
  constructor(props) {
    super(props)
    this.sliderContainer = React.createRef()
    this.pagination = React.createRef()
    this.msImages = {}
  }
  componentDidMount() {
    let $pagination = this.pagination.current
    let $sliderContainer = this.sliderContainer.current
    let msNumbers = new MomentumSlider({
      el: $sliderContainer,
      cssClass: "ms--numbers",
      range: [1, 5],
      rangeContent: function(i) {
        return "0" + i
      },
      style: {
        transform: [{ scale: [0.4, 1] }],
        opacity: [0, 1],
      },
      interactive: false,
    })
    var titles = [
      "The Content Strategy",
      "The Media Content",
      "The Lead Magnets",
      "The Broadcast",
      "The Funnel",
    ]
    var msTitles = new MomentumSlider({
      el: $sliderContainer,
      cssClass: "ms--titles",
      range: [0, 4],
      rangeContent: function(i) {
        return "<h3>" + titles[i] + "</h3>"
      },
      vertical: true,
      reverse: true,
      style: {
        opacity: [0, 1],
      },
      interactive: false,
    })
    var msLinks = new MomentumSlider({
      el: $sliderContainer,
      cssClass: "ms--links",
      range: [0, 4],
      rangeContent: function() {
        return '<a class="ms-slide__link">Ver más</a>'
      },
      vertical: true,
      interactive: false,
    })
    // // Get pagination items
    let paginationItems = [].slice.call($pagination.children)
    //   // Initializing the images slider
    let msImages = new MomentumSlider({
      // Element to append the slider
      el: $sliderContainer,
      // CSS class to reference the slider
      cssClass: "ms--images",
      // Generate the 4 slides required
      range: [0, 4],
      rangeContent: function() {
        return '<div class="ms-slide__image-container"><div class="ms-slide__image"></div></div>'
      },
      // Syncronize the other sliders
      sync: [msNumbers, msTitles, msLinks],
      // Styles to interpolate as we move the slider
      style: {
        ".ms-slide__image": {
          transform: [{ scale: [1.5, 1] }],
        },
      },
      // Update pagination if slider change
      change: function(newIndex, oldIndex) {
        if (typeof oldIndex !== "undefined") {
          paginationItems[oldIndex].classList.remove("pagination__item--active")
        }
        paginationItems[newIndex].classList.add("pagination__item--active")
      },
    })
    this.msImages = msImages
  }
  handleCarousel = index => {
    if (this.msImages) {
      this.msImages.select(index)
    }
  }

  render() {
    return (
      <>
        <div className="bigtext">MAD</div>
        <div className="circle-2"></div>
        <div className="container">
          <div className="sliders-container" ref={this.sliderContainer}>
            <ul className="pagination" ref={this.pagination}>
              <li
                className="pagination__item"
                onClick={() => this.handleCarousel(0)}
              >
                <a className="pagination__button"></a>
              </li>
              <li
                className="pagination__item"
                onClick={() => this.handleCarousel(1)}
              >
                <a className="pagination__button"></a>
              </li>
              <li
                className="pagination__item"
                onClick={() => this.handleCarousel(2)}
              >
                <a className="pagination__button"></a>
              </li>
              <li
                className="pagination__item"
                onClick={() => this.handleCarousel(3)}
              >
                <a className="pagination__button"></a>
              </li>
              <li
                className="pagination__item"
                onClick={() => this.handleCarousel(4)}
              >
                <a className="pagination__button"></a>
              </li>
            </ul>
          </div>
        </div>
      </>
    )
  }
}

export default Services
