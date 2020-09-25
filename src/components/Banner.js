import React from "react"
import styled from "styled-components"
import { device } from "../global-styles"

import Button from "./button"
import Title from "./Title"

const BannerWrapper = styled.section`
  padding: 119px 1.5rem;
  background: ${({ theme, fillColor }) => getBG(theme, fillColor)};
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${device.tablet} {
    padding: 119 0;
  }

  h2 {
    text-align: center;
    margin-bottom: 79px;
  }
`

const getBG = (theme, fillColor) => {
  if (fillColor === "primary") {
    return theme.primary
  }
  if (fillColor === "secondary") {
    return theme.secondary
  }
  return fillColor
}

// const Title = styled.h3`
//   color: white;
//   font-family: ${({ theme }) => theme.fonts.headingFont};
//   font-size: 62px;
//   margin-bottom: 79px;
//   margin-top: 0;
// `

const Banner = ({ children, fillColor }) => {
  return <BannerWrapper fillColor={fillColor}>{children}</BannerWrapper>
}

export default Banner
