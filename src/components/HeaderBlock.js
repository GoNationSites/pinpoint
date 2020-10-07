import React from "react"
import styled from "styled-components"
import Img from "react-cloudinary-lazy-image"
import { device } from "../global-styles"

import Title from "./Title"
import AboutHeader from "../assets/about-header.png"

const AboutRow = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  @media ${device.laptopL} {
    flex-direction: row;
  }
`

const ContentLeft = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.text};
  padding: 2rem 1.5rem;
  overflow: hidden;

  @media ${device.mobileL} {
    padding: 3rem 2rem;
  }

  @media ${device.laptopL} {
    padding: 18rem 0 18rem 5rem;
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
  @media ${device.laptopL} {
    width: auto;
    order: 1;
    position: absolute;
  }

  > div {
    margin-top: 0;
    @media ${device.laptopL} {
      margin-top: 12rem;
    }
  }
  img {
    width: 100%;
    max-width: none;
    display: flex;
    @media ${device.laptopL} {
      max-width: 600px;
    }
    @media ${device.laptopXL} {
      max-width: 950px;
    }
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

  @media ${device.laptop} {
    max-width: 500px;
  }
  @media ${device.laptopL} {
    max-width: 725px;
  }
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
          <Img
            cloudName={"gonation"}
            imageName={`sites/pinpoint/${img}`}
            fluid={{
              maxWidth: 1205,
              // height: 700,
            }}
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
            }}
            urlParams={"g_face,c_lfill"}
            alt="What We Do"
          />
          {/* <img src={img} alt={title} /> */}
        </div>
      </ContentRight>
    </AboutRow>
  )
}

export default HeaderBlock
