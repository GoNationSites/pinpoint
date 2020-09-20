import React from "react"
import styled from "styled-components"

import Button from "./button"

const BannerWrapper = styled.section`
  padding: 119px 0;
  background: ${({ theme }) => theme.primary};
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Title = styled.h3`
  color: white;
  font-family: ${({ theme }) => theme.fonts.headingFont};
  font-size: 62px;
  margin-bottom: 79px;
  margin-top: 0;
`

const Banner = () => {
  return (
    <BannerWrapper>
      <Title>Ready to make an impact</Title>
      <div style={{ textAlign: "center" }}>
        <Button color="#fff">TELL US ABOUT YOUR NEEDS</Button>
      </div>
    </BannerWrapper>
  )
}

export default Banner
