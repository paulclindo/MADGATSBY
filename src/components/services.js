import React, { useRef, useEffect, useState } from "react"
import "../styles/components/Services.scss"
import MomentumSlider from "momentum-slider"
import useOnScreen from "../hooks/useOnScreen"

const Services = () => {
  let dot = useRef(null)
  let sliderContainer = useRef(null)
  let pagination = useRef(null)
  let [msImages, msSet] = useState({})
  // const onScreen = useOnScreen(dot, { threshold: 0.8 })
  // console.log(onScreen)

  // let sliderContainer = useRef(null)
  // let pagination = useRef(null)
  useEffect(() => {
    let msNumbers = new MomentumSlider({
      el: sliderContainer,
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
    let titles = [
      "The Content Strategy",
      "The Media Content",
      "The Lead Magnets",
      "The Broadcast",
      "The Funnel",
    ]
    let msTitles = new MomentumSlider({
      el: sliderContainer,
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
    let msLinks = new MomentumSlider({
      el: sliderContainer,
      cssClass: "ms--links",
      range: [0, 4],
      rangeContent: function() {
        return '<a class="ms-slide__link">Ver más</a>'
      },
      vertical: true,
      interactive: false,
    })
    // // Get pagination items
    let paginationItems = [].slice.call(pagination.children)
    //   // Initializing the images slider
    msImages = new MomentumSlider({
      // Element to append the slider
      el: sliderContainer,
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
    msSet(msImages)
    // console.log(onScreen)
    console.log(dot)
  }, [])

  const handleCarousel = index => {
    if (msImages) {
      msImages.select(index)
    }
  }

  return (
    <>
      <div className="bigtext">MAD</div>
      <div className="circle-2" ref={el => (dot = el)}></div>
      <div className="container">
        <div className="sliders-container" ref={el => (sliderContainer = el)}>
          <ul className="pagination" ref={el => (pagination = el)}>
            <li className="pagination__item" onClick={() => handleCarousel(0)}>
              <a className="pagination__button"></a>
            </li>
            <li className="pagination__item" onClick={() => handleCarousel(1)}>
              <a className="pagination__button"></a>
            </li>
            <li className="pagination__item" onClick={() => handleCarousel(2)}>
              <a className="pagination__button"></a>
            </li>
            <li className="pagination__item" onClick={() => handleCarousel(3)}>
              <a className="pagination__button"></a>
            </li>
            <li className="pagination__item" onClick={() => handleCarousel(4)}>
              <a className="pagination__button"></a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Services

//   render() {
//     return (
//       <>
//         <div className="bigtext">MAD</div>
//         <div
//           className="circle-2"
//           ref = {el => dot = el}
//           style={{ transform: "translateX(100px)", transition: "1000s" }}
//         ></div>
//         <div className="container">
//           <div className="sliders-container" ref={this.sliderContainer}>
//             <ul className="pagination" ref={this.pagination}>
//               <li
//                 className="pagination__item"
//                 0)}
//               >
//                 <a className="pagination__button"></a>
//               </li>
//               <li
//                 className="pagination__item"
//                 onClick={() => this.handleCarousel(1)}
//               >
//                 <a className="pagination__button"></a>
//               </li>
//               <li
//                 className="pagination__item"
//                 onClick={() => this.handleCarousel(2)}
//               >
//                 <a className="pagination__button"></a>
//               </li>
//               <li
//                 className="pagination__item"
//                 onClick={() => this.handleCarousel(3)}
//               >
//                 <a className="pagination__button"></a>
//               </li>
//               <li
//                 className="pagination__item"
//                 onClick={() => this.handleCarousel(4)}
//               >
//                 <a className="pagination__button"></a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </>
//     )
//   }
// }

// export default
