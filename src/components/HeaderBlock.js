import React from "react"
import styled from "styled-components"

import Title from "./Title"
import AboutHeader from "../assets/about-header.png"

const AboutRow = styled.div`
  display: flex;
  align-items: center;
`

const ContentLeft = styled.div`
  width: 66%;
  background: ${({ theme }) => theme.text};
  padding: 18rem 0 8rem 12rem;
  overflow: hidden;
`

const ContentRight = styled.div`
  position: absolute;
  right: 0;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  overflow: hidden;

  > div {
    margin-top: 9rem;
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
  min-height: 413px;
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
