import React from "react"
import styled from "styled-components"
import { device, theme } from "../global-styles"

import Title from "../components/Title"
import Subtitle from "../components/Subtitle"

const Header = styled.div`
  position: relative;
`

const Box = styled.div`
  width: 75%;
  height: 915px;
  display: flex;
  align-items: center;
  padding: 0 6rem;
  background: ${theme.text};
  color: white;

  p {
    max-width: 600px;
    white-space: pre-wrap;
    font-size: 18.5px;
    font-weight: 300;
    line-height: 1.75;
  }
`

const ImgRight = styled.div`
  position: absolute;
  top: 10px;
  right: 0;
  width: 50%;
  width: 50%;
  margin-left: auto;
  margin-top: 4rem;
`

const StyledHeader = ({ title, subtitle, content, img }) => {
  return (
    <Header>
      <Box>
        <div>
          <Title>{title}</Title>
          <Subtitle color={theme.alternate}>{subtitle}</Subtitle>
          <p>{content}</p>
        </div>
      </Box>
      <ImgRight>
        <img src={img} alt={title} />
      </ImgRight>
    </Header>
  )
}

export default StyledHeader
