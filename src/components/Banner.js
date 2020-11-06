import React from "react"
import styled from "styled-components"
import { device } from "../global-styles"

const BannerWrapper = styled.section`
  padding: 119px 1.5rem;
  background: ${({ theme, fillColor }) => getBG(theme, fillColor)};
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url("https://www.transparenttextures.com/patterns/cubes.png");
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

const Banner = ({ children, fillColor }) => {
  return <BannerWrapper fillColor={fillColor}>{children}</BannerWrapper>
}

export default Banner
