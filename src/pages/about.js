import React from "react"
import MiniHero from "../components/miniHero"
import SEO from "../components/seo"
import dotsIcon from "../images/dots.svg"
const About = () => (
  <React.Fragment>
    <SEO title="About us Madmedia" />
    <MiniHero
      url="https://images.pexels.com/photos/1811991/pexels-photo-1811991.jpeg?cs=srgb&dl=adults-blur-business-people-1811991.jpg&fm=jpg"
      title="What and who 
we're made of."
      description="ABOUT US"
    />
    <div className="title-section">The Core Values We Uphold.</div>
    <div className="Values__container">
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

    <div className="team__container">
      <img src={dotsIcon} alt="" />
      <div className="team_description">
        <h1>We're the good kind of crazy</h1>
        <p>
          Endlessly curious, creatively inspired and strategically-minded. Our
          leadership team speaks 9 languages but shares the common tongue of
          hustle + passion.
        </p>
      </div>
      <div className="square"></div>
    </div>
  </React.Fragment>
)

export default About
