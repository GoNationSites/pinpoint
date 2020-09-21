import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import FooterLogoBlock from "./footerLogoBlock"
import FooterContentSquare from "./FooterContentSquare"
import Right from "./icons/right"

const FooterContainer = styled.footer`
  background: ${({ theme }) => theme.text};
  padding: 8rem 1.5rem;
`

const Container = styled.div`
  max-width: 1600px;
  margin: auto;
  display: flex;
  justify-content: space-evenly;

  > div {
    flex: 1;
  }
`

const InputWrapper = styled.div`
  position: relative;
  max-width: 300px;
  width: 100%;
  input {
    width: 100%;
    background: transparent;
    border: 4px solid ${({ theme }) => theme.glass};
    padding: 12px;
    border-radius: 30px;
    color: white;
    font-size: 18px;
  }
  span {
    position: absolute;
    height: 100%;
    display: flex;
    align-items: center;
    right: -18px;
    top: 0;

    svg {
      background: ${({ theme }) => theme.glass};
      border-radius: 30px;
    }
  }
`

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <div>
          <FooterLogoBlock />
        </div>
        <div>
          <FooterContentSquare title="Pinpoint Promotions">
            <p>Connecticut | New York | Florida</p>
            <a
              href="https://goo.gl/maps/vb7CZCyZb9fNNLzq5"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>
                Headquarters <br /> 45 Railroad Avenue <br /> West Haven, CT
                06516
              </p>
            </a>
            <a href={`tel:203-535-0333`}>
              <p>(203) 535-0333</p>
            </a>
          </FooterContentSquare>
        </div>
        <div>
          <FooterContentSquare title="Home">
            <p>
              <Link to="/about">About</Link>
            </p>
            <p>
              <Link to="/about#team">Meet the team</Link>
            </p>
            <p>
              <Link to="/what-we-do">What we do</Link>
            </p>
            <p>
              <Link to="/work">The Work</Link>
            </p>
            <p>
              <Link to="/contact">Contact</Link>
            </p>
          </FooterContentSquare>
        </div>
        <div>
          <FooterContentSquare title="Stay connected">
            <p>Subscribe to our newsletter for share-worthy experiences</p>
            <InputWrapper>
              <input type="text" />
              <span>
                <Right fill="#1E242B" width={"30px"} />
              </span>
            </InputWrapper>
          </FooterContentSquare>
        </div>
      </Container>
    </FooterContainer>
  )
}

export default Footer