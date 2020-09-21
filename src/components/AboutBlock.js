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
  padding: 8rem 0 8rem 12rem;
`

const ContentRight = styled.div`
  /* width: 33%; */
  position: absolute;
  right: 0;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;

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
`

const AboutBlock = () => {
  return (
    <AboutRow>
      <ContentLeft>
        <Title>Beginnings</Title>
        <AboutText>
          Pinpoint began by helping small businesses in southern Connecticut
          promote themselves through graphic design, printing, and promotional
          products.
        </AboutText>
        <AboutText>
          But Steve Gentile never quit networking and learning everything there
          is to know about everything. TJ Andrews never stopped implementing new
          products and delivering remarkable things in some remarkable
          situations. Clients felt like we had their back. So Pinpoint grew.
        </AboutText>
        <AboutText>
          Now, over ten years later, we work all across the country for
          multi-billion-dollar brands, helping them make a remarkable impact on
          their customer base. Sometimes we forget how amazing that is because
          we get a type of tunnel vision: to us, huge opportunities simply look
          like a person reaching out with a challenge or a problem that needs
          solving.
        </AboutText>
        <AboutText>
          And we’re here to help you. We inject some novel ideas to try to kick
          your impact up a notch (or two, or three), and then deliver on it with
          a crack production and installation team.
        </AboutText>
        <AboutText color="secondary" weight="bold">
          We’re Pinpoint. We’ve got you. Let’s create Remarkable!
        </AboutText>
      </ContentLeft>
      <ContentRight>
        <div>
          <img src={AboutHeader} alt="The Beginning Of Pinpoint" />
        </div>
      </ContentRight>
    </AboutRow>
  )
}

export default AboutBlock
