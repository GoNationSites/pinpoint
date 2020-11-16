import React from "react"
import styled from "styled-components"
import ReactTextRotator from "react-text-rotator"

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
import CTABanner from "../components/CTABanner"
import ClickBanner from "../components/ClickBanner"
import { device } from "../global-styles"

import img from "../assets/cover-video.png"

const Section = styled.section`
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

  @media (min-width: 768px) {
    .mobile-break {
      display: none;
    }
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
  padding: 3rem 1.5rem;
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

const rotatingTextData = [
  {
    text: "conceptualize",
    animation: "fade",
    className: "rotating-text",
  },
  {
    text: "design",
    animation: "fade",
    className: "rotating-text",
  },
  {
    text: "fabricate",
    animation: "fade",
    className: "rotating-text",
  },
]

const IndexPage = ({ data }) => {
  const projects = data.allSanityProject.edges
  return (
    <Layout>
      <SEO title="Home" />
      <Hero
        img={"https://via.placeholder.com/1920x1080"}
        text={rotatingTextData}
        mainHero
      />
      <Section>
        <HpContentBlock />
      </Section>

      <ProjectsBox />

      <Section tagline>
        <HPText>
          Everything we{" "}
          <ReactTextRotator
            content={rotatingTextData}
            time={5000}
            startDelay={250}
          />{" "}
          is done <span className="italic">intentionally</span>
        </HPText>
        <ButtonBlocks data={projects} />
      </Section>

      <Banner fillColor={"primary"}>
        <Title>
          Ready to make <br className="mobile-break" /> an impact?
        </Title>
        <div style={{ textAlign: "center" }}>
          <Button to="https://www.typeform.com/" color="#fff">
            TELL US ABOUT YOUR NEXT PROJECT
          </Button>
        </div>
      </Banner>
      <Testimonials />
      <ClickBanner></ClickBanner>
      {/* <CTABanner></CTABanner> */}
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  {
    allSanityProject {
      edges {
        node {
          title
          subtitle
          slug {
            current
          }
          mainImage {
            asset {
              fixed(width: 800) {
                src
              }
            }
          }
        }
      }
    }
  }
`
