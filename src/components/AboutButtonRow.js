import React from "react"
import styled from "styled-components"

import Presence from "../assets/presence.png"
import Annual from "../assets/annual.png"
import Activation from "../assets/activation.png"

const Row = styled.div`
  display: flex;
  overflow: hidden;

  > div {
    flex: 1 1;
    &:not(:last-of-type) {
      padding-right: 1rem;
    }
    img {
      height: 100%;
    }
  }
`

const Box = styled.div`
  position: relative;
`

const Content = styled.div`
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0;
  width: calc(100% - 1rem);
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent linear-gradient(0deg, #1e242b80 0%, #1e242b00 100%) 0%
    0% no-repeat padding-box;

  p {
    color: white;
    font-size: 30px;
    letter-spacing: 4.5px;
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
  }
`

const AboutButtonRow = () => {
  const data = [
    {
      title: "Activations and onsite installations",
      bg: Activation,
      activeText: "",
    },
    {
      title: "Annual projects",
      bg: Annual,
      activeText: "",
    },
    {
      title: "Presence of Pinpoint’s products or services",
      bg: Presence,
      activeText: "",
    },
  ]

  return (
    <Row>
      {data.map(btn => (
        <Box>
          <img src={btn.bg} alt={btn.title} />
          <Content>
            <p>{btn.title}</p>
          </Content>
        </Box>
      ))}
    </Row>
  )
}

export default AboutButtonRow
