import React from "react"
import styled from "styled-components"
import { theme, device } from "../global-styles"

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
      <ProjectFooter data={data.stats} />
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
