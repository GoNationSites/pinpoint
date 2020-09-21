import React from "react"
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
`

const Flex = styled.div`
  display: flex;
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
    link: "/work",
  },
  {
    title: "contact",
    link: "/contact",
  },
]

const Navbar = () => {
  return (
    <Nav>
      <div>
        <img src={logo} alt="" />
      </div>

      <Flex>
        {routes.map(route => (
          <NavItem key={route.title}>
            <Link activeStyle={{ color: `#009CDE` }} to={route.link}>
              {route.title}
            </Link>
          </NavItem>
        ))}
      </Flex>
    </Nav>
  )
}

export default Navbar
