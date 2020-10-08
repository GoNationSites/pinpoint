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
  height: 100%;
  top: 0;
  left: 0px;
  display: flex;
  align-items: center;
  z-index: 9;
  @media ${device.laptopXL} {
    left: -100px;
  }
  p {
    color: ${({ theme }) => theme.text};
    font-family: ${({ theme }) => theme.fonts.headingFont};
    background: white;
    padding: 1rem;
    font-size: 33px;
    background: transparent linear-gradient(90deg, #ffffff 50%, #ffffff00 100%)
      0% 0% no-repeat padding-box;
    padding-right: 12rem;
    max-width: 600px;

    @media ${device.laptop} {
      font-size: 33px;
    }
  }
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
        arrows={true}
        centerMode={size.width > 1024}
        containerClass="carousel-container"
        itemClass="carousel-item"
      >
        {blockData.map(block => (
          <Link
            sx={{ display: "block" }}
            to={`/the-work/${block.node.slug.current}`}
          >
            <Block key={block.node.title}>
              {console.log("rendering")}
              <div>
                <img
                  src={block.node.mainImage.asset.fixed.src}
                  alt={block.node.title}
                />
              </div>
              <TextContainer>
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
