import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import FormBlock from "../components/contact/FormBlock"
import SEO from "../components/seo"

const Contact = () => {
  return (
    <Layout>
      <SEO title="Contact" />

      <FormBlock />
    </Layout>
  )
}

export default Contact
