import React from "react"
import styled from "styled-components"
import { theme, device } from "../global-styles"
import {
  FaArrowLeft,
  FaArrowRight,
  FaStepForward,
  FaStepBackward,
} from "react-icons/fa"
import { navigate } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectsHeader from "../components/ProjectsHeader"
import ProjectFooter from "../components/ProjectFooter"
import Button from "../components/button"
import Title from "../components/Title"
import Banner from "../components/Banner"

const ContainerSmall = styled.div`
  max-width: 1068px;
  margin: auto;
  text-align: center;
  padding: 2rem 1.5rem;
  line-height: 1.75;

  @media ${device.tablet} {
    padding: 4rem 0;
  }
  p {
    font-size: 18.5px;
    font-weight: 300;
    color: ${theme.text};
  }
`

const ContainerLarge = styled.div`
  max-width: 1640px;
  margin: auto;
`

const ImagesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1640px;
  margin: auto;
`

const ImgWrap = styled.div`
  width: ${({ idx }) => getWidth(idx)};
  padding: 0.75rem;
`

const ArrowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 2rem;
  padding: 0.5rem 1rem;
  > div {
    display: flex;
  }
`

const IconContainer = styled.span`
  border-radius: 100%;
  border: 2px solid ${({ theme }) => theme.alternate};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  cursor: pointer;
  transition: all 0.3s;
  margin: 0 3px;
  &:hover {
    background: ${theme.alternate};
    transition: all 0.3s;
    path {
      fill: white;
    }
  }
`

const getWidth = idx => {
  if (idx === 0 || idx === 1 || idx === 3 || idx === 4) {
    return "50%"
  }
  if (idx === 5 || idx === 6 || idx === 7) {
    return "33%"
  }
  return "100%"
}

const Project = ({ pageContext }) => {
  const { data } = pageContext
  const { nextProject, previousProject } = pageContext
  const hasNextProject = nextProject
  const hasPreviousProject = previousProject
  const { lastProject } = pageContext
  const { firstProject } = pageContext

  const handleNextProjectClick = () => {
    navigate(`/the-work/${nextProject.node.slug.current}`)
  }
  const handlePreviousProjectClick = () => {
    navigate(`/the-work/${previousProject.node.slug.current}`)
  }
  const handleLastProjectClick = () => {
    navigate(`/the-work/${lastProject}`)
  }
  const handleFirstProjectClick = () => {
    navigate(`/the-work/${firstProject}`)
  }
  return (
    <Layout>
      <SEO title={`${data.title} Project`}></SEO>
      <ProjectsHeader
        title={data.title}
        subtitle={data.subtitle}
        content={data.description}
        img={data.mainImage.asset.url}
      />

      <ContainerSmall>
        <p>{data.bodyTextBlurb}</p>
      </ContainerSmall>
      <ImagesContainer>
        {data.projectImages.map(({ asset }, idx) => (
          <ImgWrap idx={idx}>
            <img src={asset.url} alt={`${data.title} showcase`} />
          </ImgWrap>
        ))}
      </ImagesContainer>
      <ContainerSmall>
        <p>{data.footerBlurb}</p>
      </ContainerSmall>

      <ContainerLarge>
        <ArrowContainer>
          <div>
            <IconContainer onClick={() => handleFirstProjectClick()}>
              <FaStepBackward
                color={theme.alternate}
                size={30}
              ></FaStepBackward>
            </IconContainer>
            {hasPreviousProject && (
              <IconContainer onClick={() => handlePreviousProjectClick()}>
                <FaArrowLeft color={theme.alternate} size={30}></FaArrowLeft>
              </IconContainer>
            )}
          </div>
          <div>
            {hasNextProject && (
              <IconContainer onClick={() => handleNextProjectClick()}>
                <FaArrowRight color={theme.alternate} size={30}></FaArrowRight>
              </IconContainer>
            )}
            <IconContainer onClick={() => handleLastProjectClick()}>
              <FaStepForward color={theme.alternate} size={30}></FaStepForward>
            </IconContainer>
          </div>
        </ArrowContainer>
      </ContainerLarge>

      <ProjectFooter data={data._rawStats} />
      <Banner fillColor={theme.alternate}>
        <Title color="#fff">What challenges do you face on your project?</Title>
        <Button to="/contact" color="#fff">
          TELL US ABOUT IT
        </Button>
      </Banner>
      {/* <pre>{JSON.stringify(data, 2, 2)}</pre> */}
    </Layout>
  )
}

export default Project
