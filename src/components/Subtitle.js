import React from "react"
import styled from "styled-components"

const T = styled.h4`
  font-family: ${({ theme }) => theme.fonts.bodyFont};
  font-weight: bold;
  font-size: 30px;
  color: ${({ theme }) => theme.secondary};
  letter-spacing: 4.5px;
`

const SubTitle = ({ children }) => {
  return <T>{children}</T>
}

export default SubTitle
