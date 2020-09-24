import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import FilterBox from "../components/FilterBox"

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

const TheWork = () => {
  return (
    <Layout>
      <SEO title="The Work" />
      <VideoContainer>Video will go here</VideoContainer>
      <FilterBox></FilterBox>
    </Layout>
  )
}

export default TheWork
