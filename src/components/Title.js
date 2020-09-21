import React from "react"
import styled from "styled-components"

const T = styled.h2`
  font-family: ${({ theme }) => theme.fonts.headingFont};
  font-weight: bold;
  font-size: 62px;
  color: white;
`

const Title = ({ children }) => {
  return <T>{children}</T>
}

export default Title
