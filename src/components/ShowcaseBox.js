import React, { useState } from "react"
import styled from "styled-components"

import { theme } from "../global-styles"

import Title from "./Title"
import Subtitle from "./Subtitle"
import Numbers from "./Numbers"

const Box = styled.div`
  background: url(${({ activeImage }) => activeImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding: 81px 140px;
  position: relative;
`

const Text = styled.p`
  font-size: 30px;
  letter-spacing: 0.3px;
  max-width: 700px;
  margin-bottom: 129px;

  .italic {
    font-style: italic;
  }
  .bold {
    font-weight: bold;
  }
`

const NumbersContainer = styled.div`
  position: absolute;
  bottom: -20px;
  left: 140px;
  z-index: 3;
`

const TextContainer = styled.div`
  display: flex;

  > div {
    flex: 1 1;
  }
`

const ShowcaseBox = ({ data, color, activeShowcase, setActiveShowcase }) => {
  const getActiveContent = () => {
    return (
      <>
        <Subtitle color={theme.third}>{activeShowcase.subtitle}</Subtitle>
        <TextContainer>
          <div>
            <Text>{activeShowcase.description}</Text>
          </div>
        </TextContainer>
      </>
    )
  }

  return (
    <Box activeImage={activeShowcase.img}>
      <Title margin="0 2rem 0 0" color={"text"}>
        {activeShowcase.title}
      </Title>
      {getActiveContent()}

      <NumbersContainer>
        <Numbers
          data={data}
          setActiveBox={setActiveShowcase}
          activeBox={activeShowcase}
          color={theme.third}
        />
      </NumbersContainer>
    </Box>
  )
}

export default ShowcaseBox
