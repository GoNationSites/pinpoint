import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Button = styled.button`
  color: ${({ color, theme }) => getColor(color, theme)};
  border-radius: 49px;
  padding: 33px 63px;
  border: 4px solid ${({ theme }) => theme.primary};
  font-size: 30px;
  background: ${({ variation }) =>
    variation === "hollow" ? "transparent" : ""};
`

const getColor = (color, theme) => {
  if (color === "primary") return theme.primary
  return color
}

const button = ({
  to = "/",
  children,
  variation = "hollow",
  color = "#111",
}) => {
  return (
    <Link to={to}>
      <Button variation={variation} color={color}>
        {children}
      </Button>
    </Link>
  )
}

export default button
