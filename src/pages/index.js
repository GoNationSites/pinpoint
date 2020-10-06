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
import Button from "../components/button"
import { device } from "../global-styles"

import img from "../assets/cover-video.png"

const Section = styled.section`
  /* padding: 2rem 0; */
  @media ${device.tablet} {
    padding: ${({ padding }) => padding};
  }

  @media ${device.mobileL} {
    padding: 2rem 1.5rem;
  }

  @media ${device.mobileL} {
    padding: 2rem 1rem;
  }
  @media ${device.laptop} {
    padding: 0 1rem 2rem 1rem;
  }

  /* gross... */
  ${({ tagline }) =>
    tagline
      ? `
    @media ${device.laptop} {
    padding: 2rem 1.5rem;
  }
   `
      : ""}
`

const HPText = styled.p`
  color: ${({ theme }) => theme.light2};
  font-size: 30px;
  font-family: ${({ theme }) => theme.fonts.headingFont};
  padding: 1.5rem;
  margin: 0;
  @media ${device.mobileL} {
    font-size: 32px;
  }
  @media ${device.tablet} {
    margin-bottom: 0;
    font-size: 38px;
  }
  @media ${device.laptopL} {
    padding: 4rem 1.5rem;
    margin-bottom: 0;
    font-size: 42px;
    text-align: center;
  }
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
    <Section>
      <HpContentBlock />
    </Section>

    <ProjectsBox />

    <Section tagline>
      <HPText>
        Everything we <span className="primary">conceptualize</span> is done{" "}
        <span className="italic underline">intentionally</span>
      </HPText>
      {/* <ButtonBlocks /> */}
    </Section>

    <Banner fillColor={"primary"}>
      <Title>Ready to make an impact</Title>
      <div style={{ textAlign: "center" }}>
        <Button to="/contact" color="#fff">
          TELL US ABOUT YOUR NEEDS
        </Button>
      </div>
    </Banner>
    <Testimonials />
  </Layout>
)

export default IndexPage
