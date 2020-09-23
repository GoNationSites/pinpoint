import React, { useState } from "react"
import styled from "styled-components"

import Lets from "../../assets/lets-ico.png"
import Remarkable from "../../assets/remarkable.png"
import Create from "../../assets/create.png"

import LetsActive from "../../assets/lets-ico-active.png"
import RemarkableActive from "../../assets/remarkable-active.png"
import CreateActive from "../../assets/create-active.png"

const Box = styled.div`
  background: ${({ theme }) => theme.text};
  position: relative;
  z-index: 99;
  padding: 2rem 7rem;
`

const ItemBox = styled.div`
  cursor: pointer;

  &:not(:last-of-type) {
    border-bottom: 1px solid ${({ theme }) => theme.glass};
  }
  padding: 2rem 0;
  h4 {
    text-transform: uppercase;
    font-size: 30px;
    font-weight: 500;
    letter-spacing: 4.5px;
    display: flex;
    align-items: center;
    color: ${({ isActive, theme }) => (isActive ? theme.primary : "white")};
    margin: 0;
    span {
      padding-left: 1rem;
    }
  }
  p {
    color: white;
    font-size: 18.5px;
    line-height: 1.75;
    max-width: 800px;
  }
`

const Title = styled.h3`
  font-size: 2rem;
  color: white;
  font-family: ${({ theme }) => theme.fonts.headingFont};
  font-size: 62px;
`

const ProjectsContent = ({ activeTab, setActiveTab, items }) => {
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

  const renderItems = () =>
    items.map(item => {
      console.log("active tab: ", activeTab, "item: ", item)
      const isActive = activeTab.title === item.title
      return (
        <ItemBox
          key={item.title}
          onClick={() => setActiveTab(item)}
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
          {isActive ? <p>{item.desc}</p> : ""}
        </ItemBox>
      )
    })
  return (
    <Box>
      <Title>Projects and Partnerships</Title>
      {renderItems()}
    </Box>
  )
}

export default ProjectsContent
