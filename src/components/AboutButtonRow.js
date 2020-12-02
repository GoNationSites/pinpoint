import React, { useState } from "react"
import styled from "styled-components"
import { useSpring, animated } from "react-spring"

import Presence from "../assets/presence.png"
import Annual from "../assets/annual.png"
import Activation from "../assets/activation.png"
import States from "../assets/states.png"

import { device } from "../global-styles"

const Row = styled.div`
  display: flex;
  overflow: hidden;
  flex-wrap: wrap;

  > div {
    flex: 1 1 100%;
    padding: 1rem;
    @media ${device.mobileL} {
      flex: 1 1 50%;
    }
    @media ${device.laptop} {
      flex: 1 1;
    }

    /* &:not(:last-of-type) {
      padding-right: 1rem;
    } */
    img {
      height: 100%;
      display: flex;
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
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent linear-gradient(0deg, #1e242b80 0%, #1e242b00 100%) 0%
    0% no-repeat padding-box;

  ${({ isActive }) =>
    isActive
      ? `
    background: rgba(0,0,0,.75); 
    transition: background .25s;
  `
      : ``}

  p {
    color: white;
    font-size: 30px;
    letter-spacing: 4.5px;
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
  }
`

const ActiveContent = styled.div`
  text-align: center;
  padding: 0.5rem;
  img {
    max-width: 100px;
    margin: auto;
  }
  h4 {
    color: ${({ theme }) => theme.secondary};
    font-size: 32px;
  }
  p {
    font-size: 16px;
  }
`

const AboutButtonRow = () => {
  const [activeBtn, setActiveBtn] = useState(null)
  const props = useSpring({ number: 3500, from: { number: 0 } })
  const data = [
    {
      title: "Activations and onsite installations",
      bg: Activation,
    },
    {
      title: "Annual projects",
      bg: Annual,
    },
    {
      title: "Presence of Pinpoint’s products or services",
      bg: Presence,
    },
  ]

  const getActiveText = btn => {
    switch (btn.title) {
      case "Activations and onsite installations":
        return (
          <ActiveContent>
            <img src={States} alt={btn.title} />
            <h4>26 states</h4>
            <p>{btn.title}</p>
          </ActiveContent>
        )
      case "Annual projects":
        return (
          <ActiveContent>
            <h4>
              <animated.span>
                {props.number.interpolate(val => Math.floor(val))}
              </animated.span>
              +
            </h4>
            <p>{btn.title}</p>
          </ActiveContent>
        )
      case "Presence of Pinpoint’s products or services":
        return (
          <ActiveContent>
            <p>Presence of Pinpoint's products or services:</p>
            <h4>
              <animated.span>37 States</animated.span>+
            </h4>
          </ActiveContent>
        )
      default:
        return
    }
  }

  const getContent = btn => {
    if (btn.title === activeBtn) {
      return <Content isActive>{getActiveText(btn)}</Content>
    } else {
      return (
        <Content>
          <p>{btn.title}</p>
        </Content>
      )
    }
  }

  return (
    <Row>
      {data.map(btn => (
        <Box onClick={() => setActiveBtn(btn.title)}>
          <div style={{ position: "relative" }}>
            <img src={btn.bg} alt={btn.title} />
            {getContent(btn)}
          </div>
        </Box>
      ))}
    </Row>
  )
}

export default AboutButtonRow
