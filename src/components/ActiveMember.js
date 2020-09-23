import React from "react"
import styled from "styled-components"
import { device } from "../global-styles"

import Title from "./Title"
import Subtitle from "./Subtitle"
import Close from "./Close"

const MemberContainer = styled.section`
  background: #f7f7f7;
  padding: 4.5rem;
  margin-left: 9.5rem;
  position: relative;
  margin-top: 4rem;

  span {
    position: absolute;
    right: 2rem;
    top: 2rem;
    cursor: pointer;
    z-index: 1;
  }

  p {
    color: #1e242b;
    font-size: 18.5px;
    line-height: 1.75;
    letter-spacing: 0.18px;
    margin-bottom: 0.75rem;
  }
`

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;

  > div {
    width: 50%;
  }
`

const ImageWrap = styled.div`
  background: #d0d2d3;
`

const TextWrap = styled.div`
  padding: 0 2rem;
`

const ActiveMember = ({ data, setActiveMember }) => {
  return (
    <MemberContainer>
      <span onClick={() => setActiveMember(null)}>
        <Close width={"80px"} fill={"#00000029"} />
      </span>
      <Flex>
        <ImageWrap>
          <img src={data.img} alt={data.name} />
        </ImageWrap>
        <TextWrap>
          <Title color="secondary" margin="0 0 .5rem 0">
            {data.name}
          </Title>
          <Subtitle color="text" style={{ margin: 0, marginBottom: "2rem" }}>
            {data.position}
          </Subtitle>
          {data.description.map(txt => (
            <p>{txt}</p>
          ))}
        </TextWrap>
      </Flex>
    </MemberContainer>
  )
}

export default ActiveMember
