import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { device } from "../global-styles"

import FooterLogoBlock from "./footerLogoBlock"
import FooterContentSquare from "./FooterContentSquare"
import Right from "./icons/right"

const FooterContainer = styled.footer`
  background: ${({ theme }) => theme.text};
  padding: 4rem 1.5rem;
  @media ${device.tablet} {
    padding: 8rem 1.5rem;
  }
`

const Container = styled.div`
  max-width: none;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  flex-direction: column;

  @media ${device.mobileL} {
    flex-direction: row;
  }

  @media ${device.desktop} {
    padding: 0 3rem;
  }

  > div {
    flex: 1;
    margin-bottom: 2rem;
    @media ${device.mobileL} {
      flex: 1 1 50%;
    }
    @media ${device.laptop} {
      flex: 1;
      margin-bottom: 0;
    }
  }
`

const InputWrapper = styled.div`
  position: relative;
  max-width: 300px;
  width: 100%;
  margin-top: 1.5rem;
  input {
    width: 100%;
    background: transparent;
    border: 4px solid ${({ theme }) => theme.glass};
    padding: 12px;
    border-radius: 30px;
    color: white;
    font-size: 18px;
    &::placeholder {
      color: ${({ theme }) => theme.glass};
    }
  }
  span {
    position: absolute;
    height: 100%;
    display: flex;
    align-items: center;
    right: 15px;
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
              <Link to="/about/meet-the-team">Meet The Team</Link>
            </p>
            <p>
              <Link to="/what-we-do">What We Do</Link>
            </p>
            <p>
              <Link to="/the-work">The Work</Link>
            </p>
            <p>
              <Link to="/contact">Contact</Link>
            </p>
            <p>
              <a
                href="https://experiencepinpoint.espwebsite.com/?referrerPage=ProductResults&refPgId=524572643&PCUrl=1"
                target="_blank"
                rel="noopener noreferrer"
              >
                Promo Store
              </a>
            </p>
          </FooterContentSquare>
        </div>
        <div>
          <FooterContentSquare title="Stay Connected">
            <p>Subscribe to our newsletter for share-worthy experiences</p>

            <div
              class="ctct-inline-form"
              data-form-id="319e010b-d0e2-4465-9b08-844027b9bb66"
            ></div>

            {/* <InputWrapper>
              <input type="text" placeholder="Enter your email" />
              <span>
                <Right fill="#1E242B" width={"30px"} />
              </span>
            </InputWrapper> */}
          </FooterContentSquare>
        </div>
      </Container>
    </FooterContainer>
  )
}

export default Footer
