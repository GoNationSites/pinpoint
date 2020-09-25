import React from "react"
import styled from "styled-components"
import { device } from "../global-styles"

const HeroHeader = styled.header`
  height: 600px;
  width: 100%;
  display: flex;
  background-image: url(${({ img }) => img});
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${device.tablet} {
    height: 914px;
  }
  h2 {
    color: white;
    font-family: ${({ theme }) => theme.fonts.headingFont};
    font-size: 30px;
    font-weight: bold;
    text-shadow: 2px 5px 10px #0000004d;
    @media ${device.tablet} {
      font-size: 82px;
    }
  }
`

const Hero = ({ img, text }) => {
  return (
    <HeroHeader img={img}>
      <h2>{text}</h2>
    </HeroHeader>
  )
}

export default Hero
