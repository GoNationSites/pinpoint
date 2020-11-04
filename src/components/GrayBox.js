import React from "react"
import styled from "styled-components"
import { device } from "../global-styles"

const Container = styled.section`
  background: #f7f7f7;
  padding: 1.5rem;
  margin-left: 0;
  position: relative;
  margin-top: 0;
  @media ${device.laptopL} {
    margin-top: 4rem;
    padding: 4.5rem;
    margin-left: 9.5rem;
    ${({ noMargin }) =>
      noMargin ? "margin: 0; max-width: 1200px; margin-left: auto;" : ""}
  }
  ${({ noMargin }) => (noMargin ? "margin: 0;" : "")}
`

const GrayBox = ({ children, noMargin }) => {
  return <Container noMargin>{children}</Container>
}

export default GrayBox
