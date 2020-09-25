import React from "react"
import styled from "styled-components"
import { device } from "../global-styles"

import Title from "./Title"
import AboutHeader from "../assets/about-header.png"

const AboutRow = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  @media ${device.tablet} {
    flex-direction: row;
  }
`

const ContentLeft = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.text};
  padding: 2rem 1.5rem;
  overflow: hidden;
  @media ${device.tablet} {
    padding: 18rem 0 18rem 12rem;
    width: 66%;
  }
`

const ContentRight = styled.div`
  order: -1;
  position: static;
  right: 0;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  overflow: hidden;
  width: 100%;
  @media ${device.tablet} {
    width: auto;
    order: 1;
    position: absolute;
  }

  > div {
    margin-top: 0;
    @media ${device.tablet} {
      margin-top: 9rem;
    }
  }
  img {
    width: 100%;
  }
`

const AboutText = styled.p`
  font-size: 18.5px;
  line-height: 1.75;
  margin-bottom: 0.75rem;
  color: ${({ theme, color }) =>
    color === "secondary" ? theme.secondary : "white"};
  font-weight: ${({ weight }) => (weight === "bold" ? "bold" : 100)};
  max-width: 675px;
`

const HeaderBlock = ({ title, content, img }) => {
  return (
    <AboutRow>
      <ContentLeft>
        <Title>{title}</Title>
        {content.map(txt => (
          <AboutText>{txt}</AboutText>
        ))}
      </ContentLeft>
      <ContentRight>
        <div>
          <img src={img} alt={title} />
        </div>
      </ContentRight>
    </AboutRow>
  )
}

export default HeaderBlock
