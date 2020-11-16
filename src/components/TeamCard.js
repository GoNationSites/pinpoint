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
  cursor: pointer;

  max-width: 485px;
  margin: auto;

  &:hover {
    .name {
      color: ${({ theme }) => theme.alternate};
      transition: all 0.3s;
    }
  }

  img {
    width: 100%;
  }
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

const TeamName = styled.h2`
  font-family: ${({ theme }) => theme.fonts.headingFont};
  font-weight: bold;
  font-size: 18px;
  color: ${({ color, theme }) => theme.secondary};
  margin: ${({ margin }) => (margin ? margin : 0)};

  @media ${device.mobileS} {
    font-size: 30px;
  }

  @media ${device.mobileM} {
    font-size: 30px;
  }

  @media ${device.mobileL} {
    font-size: 38px;
  }

  @media ${device.tablet} {
    font-size: 42px;
  }
`

const TeamTitle = styled.h4`
  font-family: ${({ theme }) => theme.fonts.bodyFont};
  font-weight: bold;
  font-size: 14px;
  color: ${({ theme, color }) => theme.dark};
  letter-spacing: 2px;
  text-transform: uppercase;

  @media ${device.tablet} {
    font-size: 18px;
    letter-spacing: 4.5px;
  }

  @media ${device.tablet} {
    font-size: 20px;
  }
`

//

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    text-transform: uppercase;
    font-size: 2rem;
    margin: 1rem 0 1rem 0;

    @media ${device.laptop} {
      font-size: 4rem;
    }
  }
  h4 {
    font-size: 1.5rem;
    margin: 0;
    margin-bottom: 2rem;
    color: ${({ theme }) => theme.secondary};
    @media ${device.laptop} {
      font-size: 2rem;
    }
  }

  p {
    line-height: 1.75rem;
    color: #111;
    white-space: break-spaces;
  }

  @media ${device.laptop} {
    .team-text {
      order: ${({ idx }) => (idx % 2 === 0 ? "-1" : 1)};
    }

    flex-direction: row;
    > div {
      width: 50%;
      padding: 1rem;
    }
  }
`

const Section = styled.div`
  padding: 2rem 1.5rem;
`

const TeamCard = ({ data, setActiveMember, idx }) => {
  const { memberName } = data
  const { position, bio } = data
  const img = data.memberImage.asset.fluid.src
  return (
    <Section>
      <Flex idx={idx}>
        <div className="team-image">
          <img src={img} alt={memberName} />
        </div>
        <div className="team-text">
          <h3>{memberName}</h3>
          <h4>{position}</h4>
          <p>{bio}</p>
        </div>
      </Flex>
    </Section>
  )
}

export default TeamCard
