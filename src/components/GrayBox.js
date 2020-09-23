import React from "react"
import styled from "styled-components"

const Container = styled.section`
  background: #f7f7f7;
  padding: 4.5rem;
  margin-left: 9.5rem;
  position: relative;
  margin-top: 4rem;
`

const GrayBox = ({ children }) => {
  return <Container>{children}</Container>
}

export default GrayBox
