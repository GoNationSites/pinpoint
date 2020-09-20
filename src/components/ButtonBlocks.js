import React from "react"
import styled from "styled-components"

import BravoCon from "../assets/bravo.png"
import Family from "../assets/family.png"

const Container = styled.div`
  max-width: 1600px;
  margin: auto;
  display: flex;
  justify-content: space-between;
`

const Block = styled.div`
  max-width: 50%;
  position: relative;
`

const TextContainer = styled.div`
  position: absolute;
  height: 100%;
  top: 0;
  left: -100px;
  display: flex;
  align-items: center;
  z-index: 9;
  p {
    color: ${({ theme }) => theme.text};
    font-family: ${({ theme }) => theme.fonts.headingFont};
    background: white;
    padding: 1rem;
    font-size: 62px;
    background: transparent linear-gradient(90deg, #ffffff 50%, #ffffff00 100%)
      0% 0% no-repeat padding-box;
    padding-right: 12rem;
    max-width: 600px;
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
