import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import { device } from "../global-styles"

import SEO from "../components/seo"
import AboutBlock from "../components/AboutBlock"
import PhilosophyBox from "../components/PhilosophyBox"
import Title from "../components/Title"
import Button from "../components/button"
import Banner from "../components/Banner"
import AboutButtonRow from "../components/AboutButtonRow"
import PinpointHeader from "../components/PinpointHeader"
import StyledHeader from "../components/StyledHeader"
import HideMobile from "../components/HideMobile"

const Section = styled.section`
  /* padding: ${({ padding }) => (padding ? padding : "8rem 0")}; */

  @media (max-width: 768px) {
    padding: ${({ padding }) => (padding ? padding : "2rem 1rem")};
  }
  @media ${device.tablet} {
    padding: ${({ padding }) => (padding ? padding : "2rem 1.5rem")};
  }

  @media ${device.laptop} {
    padding: ${({ padding }) =>
      padding ? padding : "4rem 1.5rem 2rem 1.5rem"};
  }
`

const About = () => {
  const headerProps = {
    title: "Our Story",
    text: [
      "Pinpoint began by helping small businesses in southern Connecticut promote themselves through graphic design, printing, and promotional products.",
      "But Steve Gentile never quit networking and learning everything there is to know about everything. TJ Andrews never stopped implementing new products and delivering remarkable things in some remarkable situations. Clients felt like we had their back. So Pinpoint grew.",
      "Now, over ten years later, we work all across the country for multi-billion-dollar brands, helping them make a remarkable impact on their customer base. Sometimes we forget how amazing that is because we get a type of tunnel vision: to us, huge opportunities simply look like a person reaching out with a challenge or a problem that needs solving.",
      "And we’re here to help you. We inject some novel ideas to try to kick your impact up a notch (or two, or three), and then deliver on it with a crack production and installation team.",
    ],
    tagline: "We’re Pinpoint. We’ve got you. Let’s create Remarkable!",
    img: "/sites/pinpoint/about-header.png",
    taglineColor: "secondary",
  }
  return (
    <Layout>
      <SEO title="About" />
      {/* <AboutBlock /> */}
      <PinpointHeader {...headerProps} />
      <Section padding="0">
        <div id="philosophy">
          <PhilosophyBox />
        </div>
      </Section>
      <Section>
        <Title color="#D0D2D3">We make the dream a reality</Title>
      </Section>
      <AboutButtonRow></AboutButtonRow>
      <Banner fillColor="secondary">
        <Title>Who will be working on your project?</Title>
        <div style={{ textAlign: "center" }}>
          <Button to="/about/meet-the-team" noArrow color="#fff">
            MEET THE TEAM
          </Button>
        </div>
      </Banner>
    </Layout>
  )
}

export default About
