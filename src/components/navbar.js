import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { device, theme } from "../global-styles"
import HamburgerMenu from "react-hamburger-menu"

import logo from "../assets/logo.svg"

const MyText = styled.p`
  color: red;
`

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  box-shadow: 2px 5px 10px #00000029;
  padding: 0.75rem;
  position: relative;
  z-index: 9999999999;
  @media ${device.laptop} {
    padding: 0px 140px;
    align-items: center;
  }

  img {
    max-width: 115px;
    @media ${device.laptop} {
      max-width: 175px;
    }
  }
`

const NavItem = styled.div`
  align-items: center;

  .nav-item__active {
    ${({ route }) => `border-top: 3px solid ${getColor(route)}`};
  }

  &:not(:last-of-type) {
    margin-right: 60px;
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
  &:hover {
    color: ${({ theme, route, cta }) => (cta ? "white" : getColor(route))};
    transition: all 0.25s;
    ${({ route }) => `border-top: 3px solid ${getColor(route)}`};
  }
  @media ${device.laptop} {
    display: flex;
  }
  a {
    font-size: 20px;
    color: ${({ theme, cta }) => (cta ? "white" : theme.text)};
    text-transform: uppercase;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.5s;
    display: inline-block;
    margin-bottom: 1rem;
    background: ${({ theme, cta }) => (cta ? theme.primary : "none")};
    padding: ${({ theme, cta }) => (cta ? "1rem 2rem" : "")};
    border-radius: ${({ cta }) => (cta ? "49px" : "")};

    @media ${device.laptop} {
      font-size: 18px;
      margin-bottom: 0;
      padding: 2rem 0;
      ${({ cta }) => (cta ? "padding: 1rem 2rem" : "")};
      display: flex;
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
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  flex-direction: column;
  @media ${device.laptop} {
    padding: 0;
    position: static;
    flex-direction: row;
    justify-content: flex-end;
    display: flex;
    align-items: stretch;
  }
`

const DropdownContainer = styled.div`
  position: absolute;
  z-index: 9999999999999;
  top: 6rem;
  /* left: 5rem; */
  right: -3rem;
  background: #f7f7f7;
  box-shadow: 2px 5px 10px #00000029;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 0.75rem;
  cursor: pointer;

  .arrow-up {
    display: none;
    @media ${device.mobileL} {
      display: block;
    }
    width: 0;
    height: 0;
    border-left: 25px solid transparent;
    border-right: 25px solid transparent;
    border-bottom: 25px solid #f7f7f7;
    /* box-shadow: 2px 5px 10px #00000029; */

    position: absolute;
    top: -25px;
    right: 59px;
  }

  a {
    display: inline-block;
    padding: 0 1rem;

    color: ${({ theme }) => theme.glass};
    text-align: right;
    &:not(:last-of-type) {
      margin-bottom: 1.5rem;
    }
  }
`

const Box = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  max-width: 1600px;
  margin: auto;
  @media ${device.laptop} {
    position: static;
    flex-direction: row;
    justify-content: flex-end;
    display: flex;
  }
`

const HamburgerContainer = styled.div`
  display: block;
  @media ${device.laptop} {
    display: none;
  }
`

const getColor = title => {
  switch (title) {
    case "What we do":
      return theme.third
    case "the work":
      return theme.alternate
    case "contact":
      return theme.pink
    default:
      return theme.secondary
  }
}

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
  {
    title: "Promo Store",
    link:
      "https://experiencepinpoint.espwebsite.com/?referrerPage=ProductResults&refPgId=524572643&PCUrl=1",
    cta: true,
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
            strokeWidth={3}
            color="#5C666F"
          />
        </HamburgerContainer>
        <Flex isOpen={isOpen}>
          {routes.map(route =>
            !route.link.includes("http") ? (
              <NavItem
                route={route.title}
                key={route.title}
                withDropdown={route.title === "about"}
              >
                <Link
                  onMouseEnter={() =>
                    route.title === "about" && setShowDropdown(route.title)
                  }
                  activeStyle={{ color: getColor(route.title) }}
                  activeClassName="nav-item__active"
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
                    <>
                      <div class="arrow-up"></div>
                      {dropdownItems[showDropdown].map(el => (
                        <Link to={el.link}>{el.title}</Link>
                      ))}
                    </>
                  </DropdownContainer>
                ) : (
                  ""
                )}
              </NavItem>
            ) : (
              <NavItem
                route={route.title}
                key={route.title}
                withDropdown={route.title === "about"}
                cta={route.cta}
              >
                <a
                  key={route.title}
                  href={route.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {route.title}
                </a>
              </NavItem>
            )
          )}
        </Flex>
      </Box>
    </Nav>
  )
}

export default Navbar
