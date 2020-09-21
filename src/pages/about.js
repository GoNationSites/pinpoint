import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"

import SEO from "../components/seo"
import AboutBlock from "../components/AboutBlock"
import PhilosophyBox from "../components/PhilosophyBox"

const Section = styled.section`
  padding: 8rem 0;
`

const About = () => {
  return (
    <Layout>
      <SEO title="About" />
      <AboutBlock />
      <Section>
        <PhilosophyBox />
      </Section>
    </Layout>
  )
}

export default About
