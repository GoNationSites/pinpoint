import React from "react"
import styled from "styled-components"

import Logo from "../assets/logo-reversed.png"
import LinkedIn from "../assets/linked-in.png"
import Instagram from "../assets/instagram.png"
import Facebook from "../assets/facebook.png"
import Youtube from "../assets/youtube.png"

const FlexSocials = styled.div`
  display: flex;
  max-width: 240px;
  align-items: center;
  padding: 1.5rem 0 0 0;

  > div {
    padding-right: 1.5rem;
  }
`

const FooterLogoBlock = () => {
  const socials = [
    {
      name: "Linked In",
      link: "",
      img: LinkedIn,
    },
    {
      name: "Instagram",
      link: "",
      img: Instagram,
    },
    {
      name: "Facebook",
      link: "",
      img: Facebook,
    },
    {
      name: "Youtube",
      link: "",
      img: Youtube,
    },
  ]

  return (
    <>
      <div>
        <img src={Logo} alt="Pinpoint" />
      </div>
      <FlexSocials>
        {socials.map(social => (
          <div>
            <a href={social.link} target="_blank" rel="noopener noreferrer">
              <img
                src={social.img}
                alt={social.name}
                style={{ width: "40px" }}
              />
            </a>
          </div>
        ))}
      </FlexSocials>
    </>
  )
}

export default FooterLogoBlock
