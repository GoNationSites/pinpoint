import React, { useState } from "react"
import styled from "styled-components"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"

import Down from "./icons/down"

import { device } from "../global-styles"
import Jags from "../assets/jags.png"
import LiveNation from "../assets/live-nation.png"
import Mastercard from "../assets/mastercard.png"
import Yale from "../assets/yale.png"

import Comcast from "../assets/comcast.svg"
import AEW from "../assets/aew.svg"
import IHeart from "../assets/iheart.png"

const Section = styled.section`
  padding: 2rem 1.5rem;
  text-align: center;
  @media ${device.tablet} {
    padding: 150px 1.5rem;
  }

  h3 {
    font-size: 30px;
    text-align: center;
    max-width: 1400px;
    color: ${({ theme }) => theme.light2};
    font-family: ${({ theme }) => theme.fonts.headingFont};
    margin: 0 auto 42px auto;

    @media ${device.tablet} {
      font-size: 42px;
      margin-bottom: 60px;
    }
    @media ${device.laptopL} {
      font-size: 50px;
    }
  }

  p {
    font-size: 22px;
    color: ${({ theme }) => theme.primary};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    letter-spacing: 4.5px;
    text-transform: uppercase;
    margin-bottom: 32px;
    @media ${device.tablet} {
      flex-direction: row;
      font-size: 30px;
      margin-bottom: 82px;
    }
  }
`

const Flex = styled.div`
  display: block;
  justify-content: space-between;
  flex-direction: column;
  flex-wrap: wrap;
  max-width: 1500px;
  margin: auto;
  align-items: center;
  text-align: center;
  @media ${device.mobileL} {
    flex-direction: row;
    > div {
      flex: 1 1 50%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  @media ${device.laptop} {
    > div {
      flex: 1 1;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  img {
    max-width: 200px;
    width: 100%;
    margin-bottom: 2.5rem;

    @media ${device.laptopXL} {
      max-width: 300px;
    }

    @media ${device.tablet} {
      margin-bottom: 0;
    }
  }
`

const Logo = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  @media ${device.laptop} {
    padding: 2rem;
  }
  img {
    filter: grayscale(1);
    max-height: 150px;
    object-fit: contain;
    &:hover {
      filter: grayscale(0);
      transition: all 0.5s;
    }
  }
`

const Testimonials = () => {
  const [hovered, setHovered] = useState(false)
  const logos = [
    { image: Jags, seo: "Jacksonville Jaguars" },
    { image: LiveNation, seo: "LiveNation" },
    { image: Mastercard, seo: "Mastercard" },
    { image: Yale, seo: "Yale" },
    { image: Comcast, seo: "Comcast" },
    { image: AEW, seo: "AEW" },
    { image: IHeart, seo: "iHeart" },
  ]
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }
  return (
    <Section>
      <h3>
        Our relationship is built on the belief that we are your partner through
        thick or thin.
      </h3>
      <p>
        Don’t believe us? Ask them{" "}
        <span>
          <Down fill="#D50032" />
        </span>
      </p>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{ maxWidth: "1600px", margin: "auto" }}
      >
        <Carousel
          responsive={responsive}
          autoPlay={!hovered}
          autoPlaySpeed={2000}
          infinite={true}
          arrows={false}
        >
          {logos.map(({ image, seo }) => (
            <Logo>
              <img src={image} alt={seo} />
            </Logo>
          ))}
        </Carousel>
      </div>
    </Section>
  )
}

export default Testimonials
