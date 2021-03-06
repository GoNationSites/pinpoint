import React from "react"
import styled from "styled-components"
import { device } from "../global-styles"

const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin-bottom: 3rem;
  @media ${device.laptop} {
    margin-bottom: 0;
    /* width: 900px; */
    width: 100%;
  }
`

const Button = styled.button`
  font-family: ${({ theme }) => theme.fonts.headingFont};
  font-size: 20px;
  color: ${({ theme }) => theme.text};
  background: white;
  border: 4px solid ${({ theme }) => theme.text};
  border-radius: 100%;
  width: ${({ isActive }) => (isActive ? "90px" : "50px")};
  height: ${({ isActive }) => (isActive ? "90px" : "50px")};
  @media ${device.mobileL} {
    width: ${({ isActive }) => (isActive ? "110px" : "54px")};
    height: ${({ isActive }) => (isActive ? "110px" : "54px")};
  }
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  cursor: pointer;
  transition: all 0.25s;
  @media ${device.tablet} {
    width: ${({ isActive }) => (isActive ? "180px" : "94px")};
    height: ${({ isActive }) => (isActive ? "180px" : "94px")};
    font-size: 62px;
  }
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    ${({ isActive, theme, color }) => `
        background: ${isActive ? getColor(color, theme) : ""};
        border-radius: ${isActive ? "100%" : ""};
        width: ${isActive ? "40px" : "auto"};
        height: ${isActive ? "40px" : "auto"};

        @media ${device.tablet} {
          width: ${isActive ? "112px" : "auto"};
          height: ${isActive ? "112px" : "auto"};
        }

    `}
    transition: all .25s;
  }
`

const getColor = (color, theme) => {
  return color ? color : theme.primary
}

const Line = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  z-index: -1;
  span {
    width: 100%;
    height: 4px;
    background: black;
  }
`

const Numbers = ({ activeBox, setActiveBox, data, color }) => {
  return (
    <Row>
      <Line>
        <span></span>
      </Line>
      {data ? (
        data.map((itm, idx) => (
          <Button
            color={color}
            onClick={() => setActiveBox(data[idx])}
            isActive={activeBox.subtitle === data[idx].subtitle}
          >
            <span>{idx + 1}</span>
          </Button>
        ))
      ) : (
        <>
          <Button
            color={color}
            onClick={() => setActiveBox(1)}
            isActive={activeBox === 1}
          >
            <span>1</span>
          </Button>
          <Button
            color={color}
            onClick={() => setActiveBox(2)}
            isActive={activeBox === 2}
          >
            <span>2</span>
          </Button>
          <Button
            color={color}
            onClick={() => setActiveBox(3)}
            isActive={activeBox === 3}
          >
            <span>3</span>
          </Button>
        </>
      )}
    </Row>
  )
}

export default Numbers
