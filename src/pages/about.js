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
import HideMobile from "../components/HideMobile"

const Section = styled.section`
  /* padding: ${({ padding }) => (padding ? padding : "8rem 0")}; */
  @media ${device.tablet} {
    padding: ${({ padding }) => (padding ? padding : "2rem 1.5rem")};
  }

  @media ${device.laptop} {
    padding: ${({ padding }) =>
      padding ? padding : "4rem 1.5rem 2rem 1.5rem"};
  }
`

const About = () => {
  return (
    <Layout>
      <SEO title="About" />
      <AboutBlock />
      <Section padding="0">
        <PhilosophyBox />
      </Section>

      <HideMobile>
        <Section>
          <Title color="#D0D2D3">We make the dream a reality</Title>
        </Section>

        <AboutButtonRow></AboutButtonRow>
      </HideMobile>

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
