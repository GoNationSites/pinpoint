import React from "react"
import styled from "styled-components"

const T = styled.h2`
  font-family: ${({ theme }) => theme.fonts.headingFont};
  font-weight: bold;
  font-size: 62px;
  color: ${({ color, theme }) => getColor(color, theme)};
  margin: ${({ margin }) => (margin ? margin : 0)};
`

const getColor = (color, theme) => {
  if (color === "text") {
    return theme.text
  }
  if (color) {
    return color
  }
  return "#fff"
}

const Title = ({ children, color, margin }) => {
  return (
    <T color={color} margin={margin}>
      {children}
    </T>
  )
}

export default Title
