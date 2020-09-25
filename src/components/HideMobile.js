import React from "react"
import styled from "styled-components"
import { device } from "../global-styles"

const HideMobile = styled.div`
  display: none;
  @media ${device.tablet} {
    display: block;
  }
`

const Hide = ({ children }, breakpoint) => {
  return <Hide>{children}</Hide>
}

export default HideMobile
