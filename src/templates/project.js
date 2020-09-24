import React from "react"
import styled from "styled-components"
import { theme } from "../global-styles"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectsHeader from "../components/ProjectsHeader"

const ContainerSmall = styled.div`
  max-width: 1068px;
  margin: auto;
  text-align: center;
  padding: 4rem 0;
  line-height: 1.75;
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
      <pre>{JSON.stringify(data, 2, 2)}</pre>
    </Layout>
  )
}

export default Project
