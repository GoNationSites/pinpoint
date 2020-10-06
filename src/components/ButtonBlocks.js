import React from "react"
import styled from "styled-components"

import BravoCon from "../assets/bravo.png"
import Family from "../assets/family.png"
import { device } from "../global-styles"

const Container = styled.div`
  max-width: 1600px;
  margin: auto;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;

  @media ${device.laptop} {
    flex-direction: row;
  }
`

const Block = styled.div`
  max-width: 50%;
  position: relative;
  margin-bottom: 2rem;
`

const TextContainer = styled.div`
  position: absolute;
  height: 100%;
  top: 0;
  left: 0px;
  display: flex;
  align-items: center;
  z-index: 9;
  @media ${device.laptopXL} {
    left: -100px;
  }
  p {
    color: ${({ theme }) => theme.text};
    font-family: ${({ theme }) => theme.fonts.headingFont};
    background: white;
    padding: 1rem;
    font-size: 33px;
    background: transparent linear-gradient(90deg, #ffffff 50%, #ffffff00 100%)
      0% 0% no-repeat padding-box;
    padding-right: 12rem;
    max-width: 600px;

    @media ${device.laptop} {
      font-size: 33px;
    }
  }
`

const ButtonBlocks = () => {
  const blocks = [
    {
      title: "BravoCon",
      img: BravoCon,
    },
    {
      title: "Family Dinner with Dawn",
      img: Family,
    },
  ]
  return (
    <Container>
      {blocks.map(block => (
        <Block>
          <div>
            <img src={block.img} alt={block.title} />
          </div>
          <TextContainer>
            <p>{block.title}</p>
          </TextContainer>
        </Block>
      ))}
    </Container>
  )
}

export default ButtonBlocks
