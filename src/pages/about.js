import React, { useRef, useEffect } from "react"
import MiniHero from "../components/miniHero"
import SEO from "../components/seo"
import dotsIcon from "../images/dots.svg"
import Glider from "glider-js"
import "../styles/About.scss"

const About = () => {
  let PeopleContainer = useRef(null)
  let dots = useRef(null)
  let prevButton = useRef(null)
  let nextButton = useRef(null)

  useEffect(() => {
    console.log(PeopleContainer)
    new Glider(PeopleContainer, {
      slidesToScroll: 1,
      itemWidth: 400,
      duration: 5,
      slidesToShow: 1.6,
      draggable: true,
      // dots,
      arrows: {
        prev: prevButton,
        next: nextButton,
      },
    })
  }, [])

  return (
    <React.Fragment>
      <SEO title="Nosotros Madmedia" />
      <MiniHero
        url="https://images.pexels.com/photos/1811991/pexels-photo-1811991.jpeg?cs=srgb&dl=adults-blur-business-people-1811991.jpg&fm=jpg"
        title="What and who 
  we're made of."
        description="ABOUT US"
      />
      <div className="Section__title">The Core Values We Uphold.</div>
      <div className="About__values">
        <div className="Values__items">
          <img
            src="http://www.loveincbc.org/wp-content/uploads/2016/03/values.jpg"
            alt=""
          />
          <div>
            <h2>Dependable</h2>
            <p>Always challenging ourselves</p>
          </div>
        </div>
        <div className="Values__items">
          <img
            src="http://www.loveincbc.org/wp-content/uploads/2016/03/values.jpg"
            alt=""
          />
          <div>
            <h2>Ownership Mindset</h2>
            <p>Always challenging ourselves</p>
          </div>
        </div>
        <div className="Values__items">
          <img
            src="http://www.loveincbc.org/wp-content/uploads/2016/03/values.jpg"
            alt=""
          />
          <div>
            <h2>Respect for Everyone</h2>
            <p>Always challenging ourselves</p>
          </div>
        </div>
        <div className="Values__items">
          <img
            src="http://www.loveincbc.org/wp-content/uploads/2016/03/values.jpg"
            alt=""
          />
          <div>
            <h2>Growth-Oriented</h2>
            <p>Always challenging ourselves</p>
          </div>
        </div>
      </div>

      <div className="Team">
        <img className="Team__svg" src={dotsIcon} alt="" />
        <div className="Team__description">
          <h1>We're the good kind of crazy</h1>
          <p>
            Endlessly curious, creatively inspired and strategically-minded. Our
            leadership team speaks 9 languages but shares the common tongue of
            hustle + passion.
          </p>
        </div>
        <div className="Team__players">
          <div className="glider" ref={el => (PeopleContainer = el)}>
            <div className="Player">
              <img
                src="https://bowen-assets.nyc3.cdn.digitaloceanspaces.com/Raf-edit.gif"
                alt=""
              />
              <div className="Player__description">
                <h3>Paul Ccari</h3>
                <p>Web Developer</p>
              </div>
            </div>
            <div className="Player">
              <img
                src="https://bowen-assets.nyc3.cdn.digitaloceanspaces.com/Jaime.gif"
                alt=""
              />
              <div className="Player__description">
                <h3>Paul Ccari</h3>
                <p>Web Developer</p>
              </div>
            </div>
            <div className="Player">
              <img
                src="https://bowen-assets.nyc3.cdn.digitaloceanspaces.com/Adrian-edit.gif"
                alt=""
              />
              <div className="Player__description">
                <h3>Paul Ccari</h3>
                <p>Web Developer</p>
              </div>
            </div>
            <div className="Player">
              <img
                src="https://bowen-assets.nyc3.cdn.digitaloceanspaces.com/Adrian-edit.gif"
                alt=""
              />
              <div className="Player__description">
                <h3>Paul Ccari</h3>
                <p>Web Developer</p>
              </div>
            </div>
          </div>

          <button
            role="button"
            ref={el => (prevButton = el)}
            aria-label="Previous"
            className="glider-prev"
          >
            ANT
          </button>
          <button
            role="button"
            ref={el => (nextButton = el)}
            aria-label="Next"
            className="glider-next"
          >
            SIG
          </button>
          <div role="tablist" className="dots" ref={el => (dots = el)}></div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default About
