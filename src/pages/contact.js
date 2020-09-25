import React from "react"
import styled from "styled-components"
import { device } from "../global-styles"

import Layout from "../components/layout"
import FormBlock from "../components/contact/FormBlock"
import StyledHeader from "../components/StyledHeader"

import SEO from "../components/seo"

const Section = styled.section`
  padding: 0;
  @media ${device.laptopL} {
    padding: 0 0 9rem 0;
  }
`

const Contact = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <StyledHeader />

      <Section>
        <FormBlock />
      </Section>
    </Layout>
  )
}

export default Contact
