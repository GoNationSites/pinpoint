import React, { useState } from "react"
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
  height: 550px;
  background: gray;
  margin: 0;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4rem;
  text-transform: uppercase;

  @media ${device.tablet} {
    height: 914px;
  }
`

const Section = styled.div`
  padding: ${({ padding }) => padding};
`

const ProjectImage = styled.div`
  padding: 0 0 1.5rem 0;
  position: relative;
  @media ${device.mobileL} {
    flex: 0 1 50%;
    padding: 1.5rem;
  }

  @media ${device.laptopL} {
    flex: 0 1 33%;
    padding: 1.5rem;
  }
`

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: calc(1600px + 3rem);
  margin: auto;
  flex-direction: column;

  @media ${device.mobileL} {
    flex-direction: row;
  }
`

const ProjectTitle = styled.h4`
  color: white;
  position: absolute;
  bottom: 0.25rem;
  left: 0rem;
  font-size: 18px;
  margin: 0;
  color: white;
  font-family: ${({ theme }) => theme.fonts.bodyFont};
  font-size: 33px;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-weight: 600;
  padding: 2rem;
  @media ${device.laptop} {
    font-size: 33px;
  }
`

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: #00000033;
`
const TheWork = ({ data }) => {
  const [activeFilters, setActiveFilters] = useState([])
  const { edges } = data.allSanityProject
  const categories = data.allSanityCategory.edges.map(
    ({ node }) => node.categoryTitle
  )
  const filterFunction = projectCategories =>
    activeFilters.length === 0
      ? true
      : activeFilters.filter(act => projectCategories.includes(act)).length
  return (
    <Layout>
      <SEO title="The Work" />
      <VideoContainer>Video will go here</VideoContainer>
      <FilterBox
        setActiveFilters={setActiveFilters}
        activeFilters={activeFilters}
        categories={categories}
      />
      <Section padding="4rem  1.5rem 2rem 1.5rem">
        <Flex>
          {edges
            .filter(({ node }) =>
              filterFunction(node.categories.map(cat => cat.categoryTitle))
            )
            .map(({ node }) => (
              <ProjectImage>
                <Link to={`/the-work/${node.slug.current}`}>
                  <img src={node.mainImage.asset.url} alt={node.title} />
                </Link>
                <ProjectTitle>{node.title}</ProjectTitle>
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
          categories {
            categoryTitle
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
        }
      }
    }
    allSanityCategory {
      edges {
        node {
          categoryTitle
        }
      }
    }
  }
`

export default TheWork
