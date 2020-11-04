import React, { useState } from "react"
import styled from "styled-components"

import { theme, device } from "../global-styles"

import Title from "./Title"
import Subtitle from "./Subtitle"
import Numbers from "./Numbers"

const Box = styled.div`
  /* background: url(${({ activeImage }) => activeImage}); */
  background-color: ${({ theme }) => theme.third};
  color: white;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding: 2rem 1.5rem;
  position: relative;

  @media ${device.laptopL} {
    width: 65%;
  }
`

const Text = styled.p`
  font-size: 1.25rem;
  letter-spacing: 0.3px;
  max-width: 700px;
  margin-bottom: 1rem;
  line-height: 1.75;

  @media ${device.tablet} {
    font-size: 30px;
    margin-bottom: 129px;
  }
  @media ${device.laptop} {
    font-size: 1.25rem;
    padding-right: 1.25rem;
  }
  .italic {
    font-style: italic;
  }
  .bold {
    font-weight: bold;
  }
`

const NumbersContainer = styled.div`
  /* position: absolute; */
  position: relative;
  bottom: -20px;
  left: 0;
  z-index: 3;
  width: 100%;
  padding: 0 1rem;
  @media ${device.laptop} {
    padding: 0 1.5rem;
    width: 100%;
  }
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media ${device.tablet} {
    flex-direction: row;
  }

  > div {
    flex: 1 1;
  }
`

const Flex = styled.div`
  @media ${device.laptop} {
    display: flex;
    align-items: stretch;
    .img-container {
      flex: 1;
      img {
        object-fit: cover;
        height: 100%;
      }
    }
  }
`

const ShowcaseBox = ({ data, color, activeShowcase, setActiveShowcase }) => {
  const getActiveContent = () => {
    return (
      <>
        <Subtitle color={"white"}>{activeShowcase.subtitle}</Subtitle>
        <TextContainer>
          <div>
            <Text>{activeShowcase.description}</Text>
          </div>
        </TextContainer>
      </>
    )
  }

  return (
    <Flex>
      <Box activeImage={activeShowcase.img}>
        <Title margin="0 2rem 0 0" color={"text"}>
          {activeShowcase.title}
        </Title>
        <NumbersContainer>
          <Numbers
            data={data}
            setActiveBox={setActiveShowcase}
            activeBox={activeShowcase}
            color={theme.third}
          />
        </NumbersContainer>
        {getActiveContent()}
      </Box>
      <div className="img-container">
        <img src={activeShowcase.img} alt="What We Do" />
      </div>
    </Flex>
  )
}

export default ShowcaseBox
