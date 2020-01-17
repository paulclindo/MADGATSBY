import React from "react"

function Icon(props) {
  const { color, size, stroke } = props

  return (
    <svg
      viewBox="0 0 100 30"
      height={size}
      width={size}
      fill={color}
      stroke={stroke}
    >
      {props.children}
    </svg>
  )
}

export default Icon
