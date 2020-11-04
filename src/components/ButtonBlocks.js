import React, { useState } from "react"
import styled from "styled-components"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import { Link } from "gatsby"

import BravoCon from "../assets/bravo.png"
import Family from "../assets/family.png"
import { device } from "../global-styles"
import useWindowSize from "../hooks/useWindowSize"

const Container = styled.div`
  max-width: 1600px;
  margin: auto;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;

  .carousel-container {
    width: 100%;
  }
  .carousel-item {
    @media ${device.tablet} {
      padding: 1.5rem;
    }
  }
  @media ${device.laptop} {
    flex-direction: row;
  }
`

const Block = styled.div`
  position: relative;
  margin-bottom: 2rem;

  img {
    max-width: 650px;
  }
`

const TextContainer = styled.div`
  position: absolute;
  /* height: 100%; */
  left: 0px;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  z-index: 9;
  width: 100%;

  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));

  @media ${device.laptopXL} {
    left: -100px;
  }
  p {
    margin: 0;
    color: white;
    font-family: ${({ theme }) => theme.fonts.bodyFont};
    padding: 1rem;
    font-size: 33px;
    letter-spacing: 2px;
    text-transform: uppercase;
    font-weight: 600;
    padding-top: 0;
    @media ${device.laptop} {
      font-size: 33px;
    }
  }
  .small {
    padding-bottom: 6px;
    font-size: 16px;
    color: white;
    opacity: 0.7;
  }
`

const NumberContainer = styled.div`
  position: absolute;
  height: 100%;
  top: 0;
  left: 0px;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  z-index: 9;

  span {
    padding: 1rem;
    color: white;
    font-family: ${({ theme }) => theme.fonts.headingFont};
    font-size: 2rem;
    font-weight: bold;
    @media ${device.laptop} {
      font-size: 60px;
    }
  }
`

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`

const ButtonBlocks = ({ data }) => {
  const [hovered, setHovered] = useState(false)
  const size = useWindowSize()
  const blocks = [
    {
      title: "BravoCon",
      img: BravoCon,
    },
    {
      title: "Family Dinner with Dawn",
      img: Family,
    },
  ]

  const blockData = data ? data : blocks

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 2,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }

  return (
    <Container>
      <Carousel
        responsive={responsive}
        autoPlay={false}
        autoPlaySpeed={2000}
        infinite={true}
        arrows={false}
        centerMode={size.width > 1024}
        containerClass="carousel-container"
        itemClass="carousel-item"
      >
        {blockData.map((block, idx) => (
          <Link
            sx={{ display: "block" }}
            to={`/the-work/${block.node.slug.current}`}
          >
            <Block key={block.node.title}>
              <Overlay></Overlay>
              <div>
                <img
                  src={block.node.mainImage.asset.fixed.src}
                  alt={block.node.title}
                />
              </div>
              <NumberContainer>
                <span>{`0${idx + 1}`}</span>
              </NumberContainer>
              <TextContainer>
                <p className="small">Brand Experience</p>
                <p>{block.node.title}</p>
              </TextContainer>
            </Block>
          </Link>
        ))}
      </Carousel>
    </Container>
  )
}

export default ButtonBlocks
