import React, { useState, useContext } from "react"
import { Link } from "gatsby"
import styled, { ThemeContext } from "styled-components"
import { device } from "../global-styles"

import Right from "./icons/right"

const Btn = styled.button`
  color: ${({ color, theme }) => getColor(color, theme)};
  border-radius: 49px;
  padding: 14px 23px;
  border: 4px solid ${({ color, theme }) => getColor(color, theme)};
  font-size: 18px;
  background: ${({ variation, bg }) =>
    variation === "hollow" ? "transparent" : bg};
  font-weight: 600;
  display: flex;
  align-items: center;
  text-decoration: none;
  letter-spacing: 0.5px;
  cursor: pointer;
  text-transform: uppercase;
  transition: all 0.4s;
  text-align: ${({ centerText }) => (centerText ? "center" : "left")};
  @media ${device.mobileL} {
    font-size: 22px;
    padding: 15px 63px;
    letter-spacing: 3px;
  }

  @media ${device.laptop} {
    font-size: 23px;
    padding: 15px 63px;
    letter-spacing: 3px;
  }

  &:hover {
    background: ${({ color, theme }) => getColor(color, theme)};
    ${({ color }) => console.log(color)};
    color: ${({ color, theme }) => (color !== "primary" ? theme.text : "#fff")};
    transition: all 0.4s;
  }

  .icon {
    padding-left: 0.1rem;
    @media ${device.tablet} {
      padding-left: 0.5rem;
    }
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
  iconColor,
  bg,
  centerText,
  style = {},
}) => {
  const [hovered, setHovered] = useState(false)
  const theme = useContext(ThemeContext)

  const getIconFill = () => {
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
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        centerText
        style={style}
      >
        <span>{children}</span>
        {noArrow ? (
          ""
        ) : (
          <span className="icon">
            <Right
              width={"35px"}
              fill={iconColor ? iconColor : getIconFill()}
            />
          </span>
        )}
      </Btn>
    </Link>
  )
}

export default Button
