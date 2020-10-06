import React from "react"
import styled from "styled-components"

import Down from "./icons/down"

import { device } from "../global-styles"
import Jags from "../assets/jags.png"
import LiveNation from "../assets/live-nation.png"
import Mastercard from "../assets/mastercard.png"
import Yale from "../assets/yale-logo-sprite.svg"

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
      font-size: 62px;
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
  display: flex;
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

  img {
    max-width: 300px;
    width: 100%;
    margin-bottom: 2.5rem;

    @media ${device.tablet} {
      margin-bottom: 0;
    }
  }
`

const Testimonials = () => {
  const logos = [
    { image: Jags, seo: "Jacksonville Jaguars" },
    { image: LiveNation, seo: "LiveNation" },
    { image: Mastercard, seo: "Mastercard" },
    { image: Yale, seo: "Yale" },
  ]
  return (
    <Section>
      <h3>
        Our relationship is built on the belief that we are your partner through
        thick or thin.
      </h3>
      <p>
        Don’t believe us? Ask them{" "}
        <span>
          <Down fill="#D50032"></Down>
        </span>
      </p>
      <Flex>
        {logos.map(({ image, seo }) => (
          <div>
            <img src={image} alt={seo} />
          </div>
        ))}
      </Flex>
    </Section>
  )
}

export default Testimonials
