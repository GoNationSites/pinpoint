import React from "react"
import styled from "styled-components"
import { device } from "../global-styles"
import ReactTextRotator from "react-text-rotator"

const HeroHeader = styled.header`
  height: 600px;
  width: 100%;
  display: flex;
  background-image: url(${({ img }) => img});
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .video-container {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
  }
  @media ${device.mobileL} {
    padding: 0 2rem;
  }
  @media ${device.tablet} {
    height: 914px;
  }
  h2 {
    color: white;
    font-family: ${({ theme }) => theme.fonts.headingFont};
    font-size: 30px;
    font-weight: 400;
    text-shadow: 2px 5px 10px #0000004d;
    margin-bottom: 0;
    text-align: center;
    letter-spacing: 1px;
    z-index: 9;
    @media ${device.mobileL} {
      font-size: 60px;
    }
  }

  .rotating-text {
    transition: all 0.2s;
    font-style: normal;
    display: inline-block;

    @media ${device.laptop} {
      min-width: 275.3px;
    }
  }

  h3 {
    color: white;
    font-family: ${({ theme }) => theme.fonts.headingFont};
    font-size: 20px;
    font-weight: bold;
    text-shadow: 2px 5px 10px #0000004d;
    text-align: center;
    z-index: 9;
    @media ${device.mobileL} {
      font-size: 35px;
    }
    @media ${device.laptop} {
      font-size: 44px;
    }
    span {
      font-style: italic;
      font-size: inherit;
    }
  }
`

const Hero = ({ img, text, mainHero }) => {
  if (mainHero) {
    return (
      <HeroHeader img={img}>
        <h2>WE CREATE REMARKABLE BRAND EXPERIENCES</h2>
        <h3>
          Everything we{" "}
          <ReactTextRotator
            content={text}
            time={5000}
            startDelay={500}
            transitionTime={100}
          />{" "}
          is done <span>intentionally</span>
        </h3>
        <div className="video-container">
          <video autoPlay muted playsInline loop>
            <source
              src="https://player.vimeo.com/external/142151259.hd.mp4?s=ae370a00b1f0433bfccf9c96106260f704112b3f&profile_id=113"
              type="video/mp4"
            />
            <source
              src="https://player.vimeo.com/external/142151259.hd.mp4?s=ae370a00b1f0433bfccf9c96106260f704112b3f&profile_id=113"
              type="video/ogg"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </HeroHeader>
    )
  }
  return (
    <HeroHeader img={img}>
      <h2>{text}</h2>
    </HeroHeader>
  )
}

export default Hero
