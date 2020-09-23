import React from "react"
import styled from "styled-components"

import { device } from "../global-styles"

const T = styled.h4`
  font-family: ${({ theme }) => theme.fonts.bodyFont};
  font-weight: bold;
  font-size: 18px;
  color: ${({ theme, color }) =>
    color ? getColor(theme, color) : theme.secondary};
  letter-spacing: 2px;
  text-transform: uppercase;

  @media ${device.tablet} {
    font-size: 25px;
    letter-spacing: 4.5px;
  }

  @media ${device.tablet} {
    font-size: 30px;
  }
`

const getColor = (theme, color) => {
  if (color === "text") {
    return theme.text
  }
  if (color === "primary") {
    return theme.primary
  }
  if (color === "secondary") {
    return theme.secondary
  }
  return color
}

const SubTitle = ({ children, color, style }) => {
  return (
    <T style={style} color={color}>
      {children}
    </T>
  )
}

export default SubTitle
