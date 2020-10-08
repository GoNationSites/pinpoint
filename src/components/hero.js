import React from "react"
import styled from "styled-components"
import { device } from "../global-styles"
import ReactTextRotator from "react-text-rotator"

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
  flex-direction: column;
  @media ${device.mobileL} {
    padding: 0 2rem;
  }
  @media ${device.tablet} {
    height: 914px;
  }
  h2 {
    color: white;
    font-family: ${({ theme }) => theme.fonts.headingFont};
    font-size: 30px;
    font-weight: bold;
    text-shadow: 2px 5px 10px #0000004d;
    margin-bottom: 0;
    @media ${device.mobileL} {
      font-size: 65px;
    }
    @media ${device.laptop} {
      font-size: 84px;
    }
  }

  .rotating-text {
    transition: all 0.2s;
    font-style: normal;
  }

  h3 {
    color: white;
    font-family: ${({ theme }) => theme.fonts.headingFont};
    font-size: 20px;
    font-weight: bold;
    text-shadow: 2px 5px 10px #0000004d;
    text-align: center;
    @media ${device.mobileL} {
      font-size: 35px;
    }
    @media ${device.laptop} {
      font-size: 44px;
    }
    span {
      font-style: italic;
      font-size: inherit;
    }
  }
`

const Hero = ({ img, text, mainHero }) => {
  if (mainHero) {
    return (
      <HeroHeader img={img}>
        <h2>Full-service agency</h2>
        <h3>
          Everything we{" "}
          <ReactTextRotator content={text} time={5000} startDelay={500} /> is
          done <span>intentionally</span>
        </h3>
      </HeroHeader>
    )
  }
  return (
    <HeroHeader img={img}>
      <h2>{text}</h2>
    </HeroHeader>
  )
}

export default Hero
