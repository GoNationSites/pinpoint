import React from "react"
import styled from "styled-components"
import { Link, graphql } from "gatsby"
import { theme, device } from "../global-styles"
import Layout from "../components/layout"
import SEO from "../components/seo"
import FilterBox from "../components/FilterBox"
import Banner from "../components/Banner"
import Title from "../components/Title"
import Button from "../components/button"

const VideoContainer = styled.div`
  height: 914px;
  background: gray;
  margin: 0;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4rem;
  text-transform: uppercase;
`

const Section = styled.div`
  padding: ${({ padding }) => padding};
`

const ProjectImage = styled.div`
  flex: 0 1 33%;
  padding: 1.5rem;
`

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: calc(1600px + 3rem);
  margin: auto;
`

const TheWork = ({ data }) => {
  const { edges } = data.allSanityProject
  return (
    <Layout>
      <SEO title="The Work" />
      <VideoContainer>Video will go here</VideoContainer>
      <FilterBox></FilterBox>
      <Section padding="4rem  1.5rem 2rem 1.5rem">
        <Flex>
          {edges.map(({ node }) => (
            <ProjectImage>
              <Link to={`/the-work/${node.slug.current}`}>
                <img src={node.mainImage.asset.url} alt={node.title} />
              </Link>
            </ProjectImage>
          ))}
        </Flex>
      </Section>
      <Banner fillColor={theme.alternate}>
        <Title color="#fff">What challenges do you face on your project?</Title>
        <Button to="/contact" color="#fff">
          TELL US ABOUT IT
        </Button>
      </Banner>
    </Layout>
  )
}

export const query = graphql`
  {
    allSanityProject {
      edges {
        node {
          title
          subtitle
          description
          footerBlurb
          bodyTextBlurb
          slug {
            current
          }
          mainImage {
            asset {
              url
            }
          }
          projectImages {
            asset {
              url
            }
          }
          stats {
            headingTitle
            bulletPoints
          }
        }
      }
    }
  }
`

export default TheWork
