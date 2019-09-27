import { Link } from "gatsby"
import logoMad from "../images/logo-Mad.svg"
import React, { useRef } from "react"
import "../styles/components/Header.scss"
import useOnScreen from "../hooks/useOnScreen"
import Brand from "./brand"

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
  const onScreen = useOnScreen(ref, { threshold: 0.7 })

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
            <Brand size={110} color={onScreen ? "#fff" : "#333"} />
          </Link>
        </div>
        <div className={right90}>
          <ul>
            <li>
              <Link to="/portfo">Portafolio</Link>
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
