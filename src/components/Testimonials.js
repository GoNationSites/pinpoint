import React from "react"
import styled from "styled-components"

import Down from "./icons/down"

import Jags from "../assets/jags.png"
import LiveNation from "../assets/live-nation.png"
import Mastercard from "../assets/mastercard.png"
import Yale from "../assets/yale-logo-sprite.svg"

const Section = styled.section`
  padding: 150px 1.5rem;
  text-align: center;

  h3 {
    font-size: 62px;
    text-align: center;
    max-width: 1400px;
    color: ${({ theme }) => theme.light2};
    font-family: ${({ theme }) => theme.fonts.headingFont};
    margin: 0 auto 42px auto;
  }

  p {
    font-size: 30px;
    color: ${({ theme }) => theme.primary};
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    letter-spacing: 4.5px;
    text-transform: uppercase;
    margin-bottom: 42px;
  }
`

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 1500px;
  margin: auto;
  align-items: center;

  img {
    max-width: 300px;
    width: 100%;
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
