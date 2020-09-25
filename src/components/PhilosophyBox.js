import React, { useState } from "react"
import styled from "styled-components"
import { device } from "../global-styles"

import LetsAbout from "../assets/lets_about.png"
import RemarkableAbout from "../assets/remarkable_about.png"
import CreateAbout from "../assets/create_about.png"

import Title from "./Title"
import Subtitle from "./Subtitle"
import Numbers from "./Numbers"
import { theme } from "../global-styles"

const Box = styled.div`
  background: url(${({ activeImage }) => activeImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding: 2rem 1.5rem;
  position: relative;
  @media ${device.tablet} {
    padding: 81px 140px;
  }
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
  left: 0;
  z-index: 3;
  width: 100%;
  padding: 0 1rem;
  @media ${device.tablet} {
    padding: 0;
    width: auto;
    left: 140px;
  }
`

const TextContainer = styled.div`
  display: flex;

  > div {
    flex: 1 1;
  }
`

const PhilosophyBox = () => {
  const [activeBox, setActiveBox] = useState(1)

  const getActiveImage = () => {
    switch (activeBox) {
      case 1:
        return LetsAbout
      case 2:
        return CreateAbout
      case 3:
        return RemarkableAbout
      default:
        return LetsAbout
    }
  }

  const getActiveContent = () => {
    switch (activeBox) {
      case 1:
        return (
          <>
            <Subtitle>LET'S</Subtitle>
            <TextContainer>
              <div>
                <Text>
                  Our philosophy lays the foundation that we are your partner.
                  Your wins are our wins. Your losses, our losses.
                </Text>
              </div>
            </TextContainer>
          </>
        )
      case 2:
        return (
          <>
            <Subtitle>CREATE</Subtitle>
            <TextContainer>
              <div>
                <Text>
                  Next, we bring in our unique, problem-solving kind of
                  creativity. From the beginning of the project, we uncover the
                  why behind your goal to make sure what we’re doing lines up
                  with your true need.
                </Text>
              </div>

              <div>
                <Text>
                  We anticipate issues and constraints that will come up. What
                  others see as challenging we find stimulating. And we’re
                  always looking for opportunities that we can help you exploit.
                </Text>
              </div>
            </TextContainer>
          </>
        )
      case 3:
        return (
          <>
            <Subtitle>REMARKABLE</Subtitle>
            <TextContainer>
              <div>
                <Text>
                  When you’re ready to move from concept to execution, forget
                  the chaos of dealing with multiple companies. Our team has the
                  skills and in-house production capabilities that take the load
                  off your shoulders while we make the dream a reality.
                </Text>
              </div>

              <div>
                <Text>
                  Everything we conceptualize, design, and fabricate is done
                  <span className="italic"> intentionally</span>: to{" "}
                  <span className="bold">make something remarkable</span> that
                  helps bring your brand to life in the hearts of your audience.
                </Text>
              </div>
            </TextContainer>
          </>
        )
    }
  }

  return (
    <Box activeImage={getActiveImage()}>
      <Title margin="0 2rem 0 0" color={"text"}>
        Philosophy
      </Title>
      {getActiveContent()}

      <NumbersContainer>
        <Numbers
          color={theme.secondary}
          setActiveBox={setActiveBox}
          activeBox={activeBox}
        />
      </NumbersContainer>
    </Box>
  )
}

export default PhilosophyBox
