import React from "react"
import styled from "styled-components"

const Title = styled.h5`
  font-size: 17px;
  font-weight: bold;
  letter-spacing: 0.09px;
  color: white;
  margin: 0 0 11px 0;
`

const ContentWrapper = styled.div`
  p,
  a {
    color: white;
    font-weight: 300;
    line-height: 1.75;
    /* text-transform: uppercase; */
    /* text-transform: capitalize; */
    &:hover {
      color: ${({ theme }) => theme.primary};
      transition: all 0.3s ease;
    }
  }
  a {
    font-size: 17px;
    &:hover {
      color: ${({ theme }) => theme.primary};
      transition: all 0.3s ease;
    }
  }

  > * {
    margin: 0 0 11px 0;
  }
`

const FooterContentSquare = ({ title, children }) => {
  return (
    <>
      <Title>{title}</Title>
      <ContentWrapper>{children}</ContentWrapper>
    </>
  )
}

export default FooterContentSquare
