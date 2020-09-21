import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"

import SEO from "../components/seo"
import AboutBlock from "../components/AboutBlock"
import PhilosophyBox from "../components/PhilosophyBox"
import Title from "../components/Title"

const Section = styled.section`
  padding: ${({ padding }) => (padding ? padding : "8rem 0")};
`

const About = () => {
  return (
    <Layout>
      <SEO title="About" />
      <AboutBlock />
      <Section>
        <PhilosophyBox />
      </Section>
      <Section padding="0 0 8rem 140px">
        <Title color="#D0D2D3">We make the dream a reality</Title>
      </Section>
    </Layout>
  )
}

export default About
