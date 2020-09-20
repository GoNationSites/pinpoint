import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Navbar from "../components/navbar"
import Hero from "../components/hero"
import HpContentBlock from "../components/hpContentBlock"
import ProjectsBox from "../components/projects-component/projectsBox"

import img from "../assets/cover-video.png"

const Section = styled.section`
  padding: ${({ padding }) => padding};
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Navbar />
    <Hero img={img} text="Full Service Agency" />
    <Section padding="0 0 198px 0">
      <HpContentBlock />
    </Section>

    <ProjectsBox />
  </Layout>
)

export default IndexPage
