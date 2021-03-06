import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Slide from "react-reveal/Slide"

import { device } from "../global-styles"

const Banner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme, isActive }) =>
    isActive ? "rgb(29, 36, 42)" : theme.primary};
  transition: all 0.5s;
  min-height: 200px;
  cursor: pointer;
  padding: 2rem 1.5rem;

  > div {
  }

  h4 {
    text-align: center;
    color: white;
    font-family: ${({ theme }) => theme.fonts.bodyFont};
    font-size: 1.5rem;
    transition: ease all 0.3s;
    text-transform: uppercase;
    font-weight: 600;
    transition: all 0.5s;
    @media ${device.tablet} {
      font-size: 2rem;
    }
  }
  img {
    transition: ease all 0.3s;
    width: 100px;
  }
  overflow: hidden;
`

const ClickBanner = ({ text = "Explore the pinpoint promo store" }) => {
  const [isHovered, setIsHovered] = useState(false)
  const nonHoverContent = () => (
    <div>
      <Slide bottom>
        <h4>{text}</h4>
      </Slide>
    </div>
  )
  const hoverContent = () => (
    <Slide bottom>
      <img
        src="https://res.cloudinary.com/gonation/image/upload/v1604617179/sites/pinpoint/Pinpoint-Brandmark.png"
        alt="Pinpoint"
      />
    </Slide>
  )
  return (
    <a
      href="https://experiencepinpoint.espwebsite.com/?referrerPage=ProductResults&refPgId=524572643&PCUrl=1"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Banner
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        isActive={isHovered}
      >
        {!isHovered ? nonHoverContent() : hoverContent()}
      </Banner>
    </a>
  )
}

export default ClickBanner
