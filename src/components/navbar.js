import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import logo from "../assets/logo.png"

const MyText = styled.p`
  color: red;
  ${props => console.log(props)}
`

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  box-shadow: 2px 5px 10px #00000029;
  padding: 40px 140px;
  position: relative;
  z-index: 9;
`

const NavItem = styled.div`
  &:not(:last-of-type) {
    padding-right: 90px;
  }
  a {
    font-size: 25px;
    color: ${({ theme }) => theme.text};
    text-transform: uppercase;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.5s;

    &:hover {
      color: ${({ theme }) => theme.secondary};
      transition: all 0.5s;
    }
  }

  ${({ withDropdown }) =>
    withDropdown
      ? `
    position: relative;
  `
      : ""};
`

const Flex = styled.div`
  display: flex;
`

const DropdownContainer = styled.div`
  position: absolute;
  top: 5rem;
  /* left: 5rem; */
  right: 3rem;
  background: #f7f7f7;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 0.75rem;
  cursor: pointer;

  a {
    display: inline-block;

    color: ${({ theme }) => theme.glass};
    text-align: right;
    &:not(:last-of-type) {
      margin-bottom: 1.5rem;
    }
  }
`

const routes = [
  {
    title: "about",
    link: "/about",
  },
  {
    title: "What we do",
    link: "/what-we-do",
  },
  {
    title: "the work",
    link: "/the-work",
  },
  {
    title: "contact",
    link: "/contact",
  },
]

const dropdownItems = {
  about: [
    {
      title: "history",
      link: "/about",
    },
    {
      title: "philosophy",
      link: "/about#philosophy",
    },
    {
      title: "meet the team",
      link: "/about/meet-the-team",
    },
  ],
}

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(null)
  return (
    <Nav>
      <div>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>

      <Flex>
        {routes.map(route => (
          <NavItem key={route.title} withDropdown={route.title === "about"}>
            <Link
              onMouseEnter={() =>
                route.title === "about" && setShowDropdown(route.title)
              }
              activeStyle={{ color: `#009CDE` }}
              to={route.link}
            >
              {route.title}
            </Link>
            {showDropdown && route.title === "about" ? (
              <DropdownContainer onMouseLeave={() => setShowDropdown(null)}>
                {dropdownItems[showDropdown].map(el => (
                  <Link to={el.link}>{el.title}</Link>
                ))}
              </DropdownContainer>
            ) : (
              ""
            )}
          </NavItem>
        ))}
      </Flex>
    </Nav>
  )
}

export default Navbar
