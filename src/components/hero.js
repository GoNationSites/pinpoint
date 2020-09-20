import React from "react"
import styled from "styled-components"

const HeroHeader = styled.header`
  height: 914px;
  width: 100%;
  display: flex;
  background-image: url(${({ img }) => img});
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  h2 {
    color: white;
    font-family: ${({ theme }) => theme.fonts.headingFont};
    font-size: 82px;
    font-weight: bold;
    text-shadow: 2px 5px 10px #0000004d;
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
