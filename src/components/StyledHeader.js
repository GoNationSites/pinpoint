import React from "react"
import styled from "styled-components"
import { device, theme } from "../global-styles"
import { Link } from "react-scroll"

import PinpointContactDetails from "../components/PinpointContactDetails"
import Title from "../components/Title"
import Right from "../components/icons/right"

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
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border: 3px solid ${theme.pink};
  margin-top: 1rem;
`

const StyledHeader = () => {
  return (
    <Header>
      <Box>
        <div>
          <Title style={{ marginBottom: "1.5rem" }}>Let's get started</Title>
          <Link to="started" smooth={true}>
            <Circle>
              <Right fill={theme.pink} />
            </Circle>
          </Link>
        </div>
      </Box>
      <PinpointContactDetails />
    </Header>
  )
}

export default StyledHeader
