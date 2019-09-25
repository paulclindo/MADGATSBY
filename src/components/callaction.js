import React from "react"
import BagIcon from "../images/BagIcon.svg"
import "../styles/components/CallAction.scss"

const CallAction = () => {
  return (
    <>
      <div className="CallAction__container">
        <img src={BagIcon} alt="" />
        <p>¿Interesado en nuestro Trabajo?</p>
        <a href="">Comienza un proyecto &mdash;</a>
      </div>
    </>
  )
}

export default CallAction
