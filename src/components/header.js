import { Link } from "gatsby"
import logoMad from "../images/logo-Mad.svg"
import React, { useRef } from "react"
import "../styles/components/Header.scss"
import useOnScreen from "../hooks/useOnScreen"

// function useOnScreen(options) {
//   const [ref, setRef] = React.useState(null)
//   const [visible, setVisible] = React.useState(false)

//   React.useEffect(() => {
//     const observer = new IntersectionObserver(([entry]) => {
//       setVisible(entry.isIntersecting)
//     }, options)

//     if (ref) {
//       observer.observe(ref)
//       console.log("Se esta escuchando", ref)
//     }

//     return () => {
//       if (ref) {
//         observer.unobserve(ref)
//         console.log("dejo de escuchars")
//       }
//     }
//   }, [ref, options])

//   return [setRef, visible]
// }
// const [ref, setRef] = React.useState(null)
// const [visible, setVisible] = React.useState(false)

const Header = () => {
  const ref = useRef()
  const onScreen = useOnScreen(ref, { threshold: 0.8 })

  let right90 = "Navbar__items"
  let left90 = "logo-MAD"
  if (!onScreen) {
    right90 += " right-90 faded"
    left90 += " left-90 faded"
  } else {
  }

  return (
    <header ref={ref}>
      <div className="Navbar">
        <div className={left90}>
          <Link to="/">
            <img src={logoMad} alt="" />
          </Link>
        </div>
        <div
          className={right90}
          style={{ background: onScreen ? "transparent" : "#fff" }}
        >
          <ul>
            <li>
              <Link to="/portfolio">Portafolio</Link>
            </li>
            <li>
              <Link to="/about">Nosotros</Link>
            </li>
            <li>
              <Link to="/contact">Contacto</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}
export default Header
