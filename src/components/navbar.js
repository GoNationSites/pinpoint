import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { device } from "../global-styles"
import HamburgerMenu from "react-hamburger-menu"

import logo from "../assets/logo.svg"

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
  padding: 0.75rem;
  position: relative;
  z-index: 9;
  @media ${device.laptop} {
    padding: 40px 140px;
  }

  img {
    max-width: 115px;
    @media ${device.laptop} {
      max-width: 175px;
    }
  }
`

const NavItem = styled.div`
  &:not(:last-of-type) {
    padding-right: 90px;
  }
  .children-route {
    font-size: 20px;
    color: ${({ theme }) => theme.glass};
    margin-left: 1rem;
    display: block;
    @media ${device.laptop} {
      display: none;
    }
  }
  a {
    font-size: 20px;
    color: ${({ theme }) => theme.text};
    text-transform: uppercase;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.5s;
    display: inline-block;
    margin-bottom: 1rem;

    @media ${device.laptop} {
      font-size: 18px;
      margin-bottom: 0;
    }
    @media ${device.laptopL} {
      font-size: 22px;
      margin-bottom: 0;
    }

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
  position: absolute;
  top: 60px;
  width: 100%;
  left: 0;
  background: white;
  padding: 1rem;
  @media ${device.laptop} {
    position: static;
    flex-direction: row;
    justify-content: flex-end;
    display: flex;
  }
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

const Box = styled.div`
  flex-direction: column;
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  justify-content: space-between;
  width: 100%;
  max-width: 1600px;
  margin: auto;
  @media ${device.laptop} {
    position: static;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    display: flex;
  }
`

const HamburgerContainer = styled.div`
  display: block;
  @media ${device.laptop} {
    display: none;
  }
`

const routes = [
  {
    title: "about",
    link: "/about",
    childrenRoutes: [
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
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Nav>
      <Box>
        <div>
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>

        <HamburgerContainer>
          <HamburgerMenu
            isOpen={isOpen}
            menuClicked={() => setIsOpen(!isOpen)}
            width={18}
            height={15}
            strokeWidth={1}
            color="black"
          />
        </HamburgerContainer>

        <Flex isOpen={isOpen}>
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
              {route.childrenRoutes
                ? route.childrenRoutes.map(route => (
                    <Link className="children-route" to={route.link}>
                      {route.title}
                    </Link>
                  ))
                : ""}
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
      </Box>
    </Nav>
  )
}

export default Navbar
