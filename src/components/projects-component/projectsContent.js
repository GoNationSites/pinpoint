import React, { useState } from "react"
import styled from "styled-components"
import { device } from "../../global-styles"

import { Transition } from "react-transition-group"

import Lets from "../../assets/lets-ico.png"
import Remarkable from "../../assets/remarkable.png"
import Create from "../../assets/create.png"
import LetsActive from "../../assets/lets-ico-active.png"
import RemarkableActive from "../../assets/remarkable-active.png"
import CreateActive from "../../assets/create-active.png"

const duration = 500

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
}

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
}

const Box = styled.div`
  background: ${({ theme }) => theme.text};
  position: relative;
  z-index: 99;
  padding: 2rem 1.5rem;

  @media ${device.laptop} {
    padding: 2rem 7rem;
  }
`

const ItemBox = styled.div`
  cursor: pointer;

  &:not(:last-of-type) {
    border-bottom: 1px solid ${({ theme }) => theme.glass};
  }
  padding: 2rem 0;
  h4 {
    text-transform: uppercase;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 4.5px;
    display: flex;
    align-items: center;
    color: ${({ isActive, theme }) => (isActive ? theme.primary : "white")};
    margin: 0;
    @media ${device.tablet} {
      font-size: 25px;
    }
    @media ${device.laptopXL} {
      font-size: 30px;
    }
    span {
      padding-left: 1rem;
    }
  }
  p {
    color: white;
    font-size: 18.5px;
    line-height: 1.75;
    max-width: 800px;
    margin: 0.5rem 0 0 0;
  }
`

const Title = styled.h3`
  font-size: 2rem;
  color: white;
  font-family: ${({ theme }) => theme.fonts.headingFont};
  font-size: 30px;
  font-weight: 400;

  @media ${device.tablet} {
    font-size: 32px;
  }

  @media ${device.laptop} {
    font-size: 35px;
  }

  @media ${device.laptop} {
    margin-bottom: 0;
  }

  @media ${device.laptopXL} {
    font-size: 62px;
  }
`

const ProjectsContent = ({ activeTab, setActiveTab, items }) => {
  const [inProp, setInProp] = useState(false)

  const getIco = title => {
    const isActive = title === activeTab.title
    switch (title) {
      case "Let's":
        return isActive ? LetsActive : Lets
      case "Create":
        return isActive ? CreateActive : Create
      case "Remarkable":
        return isActive ? RemarkableActive : Remarkable
    }
  }

  const handleClick = item => {
    setActiveTab(item)
    // setInProp(true)
  }

  const renderItems = () =>
    items.map(item => {
      const isActive = activeTab.title === item.title
      return (
        <ItemBox
          key={item.title}
          onClick={() => handleClick(item)}
          isActive={isActive}
        >
          <h4>
            <img
              style={{ maxWidth: "40px" }}
              src={getIco(item.title)}
              alt={item.title}
            />{" "}
            <span>{item.title}</span>
          </h4>
          {/* {isActive ? ( */}
          <Transition in={isActive} timeout={duration}>
            {state => {
              return item.desc.map(txt => (
                <p
                  style={{
                    ...defaultStyle,
                    ...transitionStyles[state],
                  }}
                >
                  {isActive ? txt : ""}
                </p>
              ))
            }}
          </Transition>
          {/* ) : (
            ""
          )} */}
        </ItemBox>
      )
    })
  return (
    <Box>
      <Title>Projects are Partnerships</Title>
      {renderItems()}
    </Box>
  )
}

export default ProjectsContent
