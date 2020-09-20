import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Right from "./icons/right"

const Button = styled.button`
  color: ${({ color, theme }) => getColor(color, theme)};
  border-radius: 49px;
  padding: 15px 63px;
  border: 4px solid ${({ color, theme }) => getColor(color, theme)};
  font-size: 30px;
  background: ${({ variation }) =>
    variation === "hollow" ? "transparent" : ""};
  font-weight: 600;
  display: flex;
  align-items: center;
  text-decoration: none;
  letter-spacing: 3px;
  cursor: pointer;
  text-transform: uppercase;

  .icon {
    padding-left: 0.5rem;
  }
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
        <span>{children}</span>
        <span className="icon">
          <Right fill={color === "primary" ? "#D50032" : color} />
        </span>
      </Button>
    </Link>
  )
}

export default button
