import React from "react"
import styled from "styled-components"
import { device } from "../global-styles"

import Title from "./Title"
import Subtitle from "./Subtitle"

const Card = styled.div`
  text-align: center;
  background: #d0d2d3;
  width: 100%;
  position: relative;
`

const ShadowBox = styled.div`
  position: absolute;
  background: white;
  bottom: 0;
  left: 0;
  width: 100%;
  text-align: left;
  padding: 1rem 1rem 2rem 1rem;
  background: transparent
    linear-gradient(
      90deg,
      #ffffff 0%,
      rgba(255, 255, 255, 0.5) 100%,
      #d0d2d300 50%
    )
    0% 0% no-repeat padding-box;
  @media ${device.tablet} {
    left: -80px;
  }
`

const TeamCard = ({ data }) => {
  const { img, name, position } = data
  return (
    <Card>
      <div>
        <img src={img} alt={name} />
      </div>
      <ShadowBox>
        <Title margin="0 0 .5rem 0" color="secondary">
          {name}
        </Title>

        <Subtitle
          style={{
            fontWeight: "bold",
            margin: 0,
          }}
          color="#5C666F"
        >
          {position}
        </Subtitle>
      </ShadowBox>
    </Card>
  )
}

export default TeamCard
