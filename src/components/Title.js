import React from "react"
import styled from "styled-components"

import { device } from "../global-styles"

const T = styled.h2`
  font-family: ${({ theme }) => theme.fonts.headingFont};
  font-weight: bold;
  font-size: 30px;
  color: ${({ color, theme }) => getColor(color, theme)};
  margin: ${({ margin }) => (margin ? margin : 0)};

  @media ${device.mobileS} {
    font-size: 30px;
  }

  @media ${device.mobileM} {
    font-size: 30px;
  }

  @media ${device.mobileL} {
    font-size: 38px;
  }

  @media ${device.tablet} {
    font-size: 42px;
  }
`

const getColor = (color, theme) => {
  if (color === "text") {
    return theme.text
  }
  if (color === "secondary") {
    return theme.secondary
  }
  if (color) {
    return color
  }
  return "#fff"
}

const Title = ({ children, color, margin, style }) => {
  return (
    <T color={color} margin={margin} style={style}>
      {children}
    </T>
  )
}

export default Title
