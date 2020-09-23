import React from "react"
import styled from "styled-components"

const Row = styled.div`
  width: 500px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`

const Button = styled.button`
  font-family: ${({ theme }) => theme.fonts.headingFont};
  font-size: 62px;
  color: ${({ theme }) => theme.text};
  background: white;
  border: 4px solid ${({ theme }) => theme.text};
  border-radius: 100%;
  width: ${({ isActive }) => (isActive ? "180px" : "94px")};
  height: ${({ isActive }) => (isActive ? "180px" : "94px")};
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  cursor: pointer;
  transition: all 0.25s;
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    ${({ isActive, theme, color }) => `
        background: ${isActive ? getColor(color, theme) : ""};
        border-radius: ${isActive ? "100%" : ""};
        width: ${isActive ? "112px" : "auto"};
        height: ${isActive ? "112px" : "auto"};
    `}
    transition: all .25s;
  }
`

const getColor = (color, theme) => (color ? color : theme.primary)

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
          <Button onClick={() => setActiveBox(1)} isActive={activeBox === 1}>
            <span>1</span>
          </Button>
          <Button onClick={() => setActiveBox(2)} isActive={activeBox === 2}>
            <span>2</span>
          </Button>
          <Button onClick={() => setActiveBox(3)} isActive={activeBox === 3}>
            <span>3</span>
          </Button>
        </>
      )}
    </Row>
  )
}

export default Numbers
