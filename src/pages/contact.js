import React from "react"
import SEO from "../components/seo"
import contactImage from "../images/contact.svg"
import "../styles/Contact.scss"

const Contact = () => (
  <React.Fragment>
    <SEO title="Contacto Madmedia" />
    <div className="contact__principal">
      <img src={contactImage} alt="" />
    </div>
    <div className="contact__container">
      <h1>We'd Love to Hear from You!</h1>
      <div className="line"></div>
      <p>
        A better experience for your customers, fewer headaches for your team.
        You'll be set up in minutes.
      </p>
      <form
        onSubmit={e => {
          e.preventDefault()
        }}
      >
        <input type="text" placeholder="Ingresa tu correo electrónico" />
        <input type="submit" value="Get Started" />
      </form>
    </div>
  </React.Fragment>
)

export default Contact
