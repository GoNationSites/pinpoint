import React from "react"
import styled from "styled-components"
import { device, theme } from "../global-styles"
import Img from "react-cloudinary-lazy-image"

import PinpointContactDetails from "../components/PinpointContactDetails"
import Title from "../components/Title"
import Right from "../components/icons/right"

const Header = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
`

const Box = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 2rem 1.5rem;
  background: ${theme.text};
  color: white;

  p {
    line-height: 1.75rem;
    font-size: 18px;
    font-weight: 300;
    max-width: 674px;
  }

  .tagline {
    color: ${({ theme, taglineColor }) => theme[taglineColor]};
    font-weight: bold;
  }

  > div {
    @media ${device.laptopL} {
      max-width: 75%;
    }
  }

  @media ${device.laptopL} {
    width: 75%;
    height: 915px;
    padding: 0 6rem;
  }
`

const ImageBox = styled.div`
  z-index: 9999999;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  order: -1;

  height: 100%;
  @media ${device.laptopL} {
    order: unset;
    position: absolute;
    width: 45%;
  }
  > div {
    height: auto !important;
  }
  img {
    height: auto;
  }
`

const PinpointHeader = ({
  title = "",
  text = [],
  tagline,
  img,
  taglineColor,
}) => {
  return (
    <Header>
      <Box taglineColor={taglineColor}>
        <div>
          <Title style={{ marginBottom: "1.5rem" }}>{title}</Title>
          {text.map(txt => (
            <p>{txt}</p>
          ))}
          {tagline ? <p className="tagline">{tagline}</p> : ""}
        </div>
      </Box>
      <ImageBox>
        <Img
          cloudName={"gonation"}
          imageName={img}
          fluid={{
            maxWidth: 1200,
            // height: 700,
          }}
          style={{
            display: "flex",
          }}
          alt={title}
        />
      </ImageBox>
    </Header>
  )
}

export default PinpointHeader
