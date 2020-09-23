import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import HpContentBlock from "../components/hpContentBlock"
import ProjectsBox from "../components/projects-component/projectsBox"
import ButtonBlocks from "../components/ButtonBlocks"
import Banner from "../components/Banner"
import Testimonials from "../components/Testimonials"
import Title from "../components/Title"
import Button from "../components/Button"

import img from "../assets/cover-video.png"

const Section = styled.section`
  padding: ${({ padding }) => padding};
`

const HPText = styled.p`
  color: ${({ theme }) => theme.light2};
  padding-left: 100px;
  font-size: 62px;
  font-family: ${({ theme }) => theme.fonts.headingFont};
  margin-bottom: 8rem;
  .primary {
    color: ${({ theme }) => theme.primary};
  }
  .italic {
    text-decoration: underline;
    font-style: italic;
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero img={img} text="Full Service Agency" />
    <Section padding="0 0 198px 0">
      <HpContentBlock />
    </Section>

    <ProjectsBox />

    <Section padding="200px 0">
      <HPText>
        Everything we <span className="primary">conceptualize</span> is done{" "}
        <span className="italic underline">intentionally</span>
      </HPText>
      <ButtonBlocks />
    </Section>

    <Banner fillColor={"primary"}>
      <Title>Ready to make an impact</Title>
      <div style={{ textAlign: "center" }}>
        <Button color="#fff">TELL US ABOUT YOUR NEEDS</Button>
      </div>
    </Banner>
    <Testimonials />
  </Layout>
)

export default IndexPage
