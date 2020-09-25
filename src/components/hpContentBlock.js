import React from "react"
import styled from "styled-components"

import { device } from "../global-styles"

import Button from "./button"

const Container = styled.div`
  background: ${({ theme }) => theme.light};
  padding: 4rem 1.5rem;
  max-width: 1200px;
  margin: auto;

  @media ${device.tablet} {
    padding: 100px 50px;
  }

  p {
    color: ${({ theme }) => theme.text};
    font-weight: normal;
    margin-bottom: 84.5px;
    font-size: 18px;
    line-height: 1.75;
    @media ${device.tablet} {
      font-size: 30px;
    }
  }
`

const HpContentBlock = () => {
  return (
    <Container>
      <p>
        Pinpoint is a full-service promotional marketing agency that can brand
        and customize almost any product or space to help create unforgettable,
        share-worthy experiences that connect people with your brand.
      </p>
      <Button to="/what-we-do" color="primary" withIcon>
        What Else Do We Do?
      </Button>
    </Container>
  )
}

export default HpContentBlock
