import React from "react"
import styled from "styled-components"

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    max-width: 169px;
    margin: auto;
  }
  p {
    font-size: 30px;
    letter-spacing: 0.3px;
    color: #1e242b;
    text-align: center;
  }
`

const InfoIcon = ({ data }) => {
  return (
    <Box>
      <img src={data.ico} alt={data.txt} />
      <p>{data.txt}</p>
    </Box>
  )
}

export default InfoIcon
