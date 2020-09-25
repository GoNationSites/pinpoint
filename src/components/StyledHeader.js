import React from "react"
import styled from "styled-components"
import { device, theme } from "../global-styles"

import PinpointContactDetails from "../components/PinpointContactDetails"
import Title from "../components/Title"
import Right from "../components//icons/Right"

const Header = styled.div`
  position: relative;
`

const Box = styled.div`
  width: 100%;
  height: 370px;
  display: flex;
  align-items: center;
  padding: 2rem 1.5rem;
  background: ${theme.text};
  color: white;

  @media ${device.laptopL} {
    width: 75%;
    height: 915px;
    padding: 0 6rem;
  }
`

const Circle = styled.span`
  border-radius: 100%;
  display: inline-block;
  padding: 0.5rem;
  border: 3px solid ${theme.pink};
  margin-top: 1rem;
`

const StyledHeader = () => {
  return (
    <Header>
      <Box>
        <div>
          <Title>Let's get started</Title>
          <Circle>
            <Right fill={theme.pink} />
          </Circle>
        </div>
      </Box>
      <PinpointContactDetails />
    </Header>
  )
}

export default StyledHeader
