import React, { useState, useContext } from "react"
import { Link } from "gatsby"
import styled, { ThemeContext } from "styled-components"

import Right from "./icons/right"

const Btn = styled.button`
  color: ${({ color, theme }) => getColor(color, theme)};
  border-radius: 49px;
  padding: 15px 63px;
  border: 4px solid ${({ color, theme }) => getColor(color, theme)};
  font-size: 30px;
  background: ${({ variation, bg }) =>
    variation === "hollow" ? "transparent" : bg};
  font-weight: 600;
  display: flex;
  align-items: center;
  text-decoration: none;
  letter-spacing: 3px;
  cursor: pointer;
  text-transform: uppercase;
  transition: all 0.4s;

  ${({ noHover }) => {
    if (noHover) {
      return ""
    } else {
      return `     &:hover {
    background: ${({ color, theme }) => getColor(color, theme)};
    color: ${({ color, theme }) => (color !== "primary" ? theme.text : "#fff")};
    transition: all 0.4s;
  }`
    }
  }}

  .icon {
    padding-left: 0.5rem;
  }
`

const getColor = (color, theme) => {
  if (color === "primary") return theme.primary
  return color
}

const Button = ({
  to = "/",
  children,
  variation = "hollow",
  color = "#111",
  noArrow,
  bg,
  noHover,
}) => {
  const [hovered, setHovered] = useState(false)
  const theme = useContext(ThemeContext)

  const getIconFill = () => {
    if (noHover) return
    if (hovered) {
      if (color === "#fff") {
        return theme.text
      } else {
        return "#fff"
      }
    } else {
      return color === "primary" ? theme.primary : color
    }
  }

  return (
    <Link to={to}>
      <Btn
        bg={bg}
        variation={variation}
        color={color}
        noHover={noHover}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <span>{children}</span>
        {noArrow ? (
          ""
        ) : (
          <span className="icon">
            <Right fill={getIconFill()} />
          </span>
        )}
      </Btn>
    </Link>
  )
}

export default Button
