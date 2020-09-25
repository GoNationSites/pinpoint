import React from "react"
import styled from "styled-components"
import { device, theme } from "../global-styles"
import logo from "../assets/logo.png"

const Box = styled.div`
  background: ${theme.light2};
  padding: 1.5rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: static;
  width: 100%;
  top: 50px;
  right: 0;
  margin-left: auto;

  @media ${device.laptopL} {
    position: absolute;
    width: 50%;
    padding: 6rem;
    margin-top: 4rem;
  }
`

const BoldText = styled.span`
  color: #5c666f;
  font-size: 30px;
  font-weight: bold;
  letter-spacing: 0.3px;
  color: ${theme.glass};
  padding-right: 1rem;
`

const StyledText = styled.p`
  font-size: 20px;
  margin: 0.75rem 0;
  color: ${theme.glass};
  font-weight: 400;
  @media ${device.laptopL} {
    font-size: 30px;
  }
  a {
    font-size: 20px;
    color: ${theme.glass};
    font-weight: 400;
    @media ${device.laptopL} {
      font-size: 30px;
    }
  }
`

const PinpointContactDetails = () => {
  const renderContactDetails = () => (
    <>
      <div style={{ marginBottom: "4rem" }}>
        <StyledText>
          <BoldText>Phone:</BoldText>
          <a href={`tel:203-535-0333`}>203-535-0333</a>
        </StyledText>

        <StyledText>
          <BoldText>Toll-Free:</BoldText>
          <a href={`tel:1-866-9-PINPOINT`}>1-866-9-PINPOINT</a>
          <p>Connecticut | New York | Florida</p>
        </StyledText>
      </div>

      <div>
        <BoldText>Headquarters</BoldText>
        <a
          href="https://goo.gl/maps/xVbACN8ciYxWga457"
          target="_blank"
          rel="noopener noreferrer"
        >
          <StyledText>45 Railroad Ave.</StyledText>
          <StyledText>West Haven CT 06516</StyledText>
        </a>
      </div>
    </>
  )

  return (
    <Box>
      <div>
        <div>
          <img src={logo} alt="Pinpoint" />
        </div>
        <div>{renderContactDetails()}</div>
      </div>
    </Box>
  )
}

export default PinpointContactDetails
