import React, { useState } from "react"
import styled from "styled-components"
import { theme } from "../global-styles"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeaderBlock from "../components/HeaderBlock"
import GrayBox from "../components/GrayBox"
import InfoIcon from "../components/InfoIcon"
import ShowcaseBox from "../components/ShowcaseBox"
import Banner from "../components/Banner"
import Title from "../components/Title"
import Button from "../components/Button"
import ButtonBlocks from "../components/ButtonBlocks"
import img from "../assets/WhatWeDo.png"

import Apparel from "../assets/what-we-do/apparel.png"
import Creative from "../assets/what-we-do/creative.png"
import Fabricated from "../assets/what-we-do/fabricated.png"
import Print from "../assets/what-we-do/print.png"
import Promotions from "../assets/what-we-do/promotions.png"
import Signs from "../assets/what-we-do/signs.png"
import Strategy from "../assets/what-we-do/strategy.png"
import Mail from "../assets/what-we-do/mail.png"

import whatwedoA from "../assets/whatwedo_1.png"
import whatwedoB from "../assets/whatwedo_2.png"

const HPText = styled.p`
  color: ${({ theme }) => theme.light2};
  padding-left: 100px;
  font-size: 62px;
  font-family: ${({ theme }) => theme.fonts.headingFont};
  margin-bottom: 8rem;
  .primary {
    color: ${({ theme }) => theme.primary};
  }
  .italic {
    text-decoration: underline;
    font-style: italic;
  }
`

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  > div {
    width: 25%;
  }
`

const Section = styled.section`
  padding: 4rem 0;
  padding-top: 190px;
  padding: ${({ padding }) => (padding ? padding : "")};
`

const WhatWeDo = () => {
  const showcaseData = [
    {
      title: "Working Together",
      subtitle: "Discover + Research",
      description: [
        "The most important stage is aligning ourselves with you to understand your goals, motivators, and challenges. We ask tons of questions so we can function as an extension of your team.",
      ],
      img: whatwedoA,
    },
    {
      title: "Working Together",
      subtitle: "Strategy + Planning",
      description: [
        "This is the bridge between where you are and where you need to be. We connect the dots of your story to develop concepts and ideas that begin to frame the solution. We keep connected with you to stay aligned.",
      ],
      img: whatwedoB,
    },
  ]
  const [activeShowcase, setActiveShowcase] = useState(showcaseData[0])
  const content = [
    "As a full-service promotional marketing agency, we team up with brands and organizations that need to make a remarkable impact on their customers. We come alongside our clients to help them imagine what could be, and then empower them to actualize their true potential in their marketing communication.",
    "We provide experienced problem-solving, creative ideas, and the advantages of in-house production so that companies can easily communicate their brand message effectively in any medium, anywhere, at any time.",
  ]

  const whatWeDoData = [
    {
      ico: Strategy,
      txt: "Brand strategy + brand experiences",
    },
    {
      ico: Creative,
      txt: "Creative services, graphic design, copywriting",
    },
    {
      ico: Fabricated,
      txt: "Fabricated build-outs + environment transformations",
    },
    {
      ico: Signs,
      txt: "Signs, vehicle wraps, wall wraps, installation",
    },
    {
      ico: Promotions,
      txt: "Promotional products",
    },
    {
      ico: Apparel,
      txt: "Imprinted apparel",
    },
    {
      ico: Print,
      txt: "Print collateral",
    },
    {
      ico: Mail,
      txt: "Direct mail marketing",
    },
  ]

  return (
    <Layout>
      <SEO title="What We Do" />
      <HeaderBlock title="What We Do" content={content} img={img} />
      <Section>
        <GrayBox>
          <Flex>
            {whatWeDoData.map(el => (
              <div>
                <InfoIcon data={el} />
              </div>
            ))}
          </Flex>
        </GrayBox>
      </Section>
      <Section padding="4rem 0">
        <ShowcaseBox
          data={showcaseData}
          color="third"
          activeShowcase={activeShowcase}
          setActiveShowcase={setActiveShowcase}
        />
      </Section>

      <Section padding="4rem 0">
        <HPText>Project Preview</HPText>
        <ButtonBlocks />
      </Section>

      <Section padding="4rem 0 0 0">
        <Banner fillColor={theme.third}>
          <Title>We're here to listen.</Title>
          <div style={{ textAlign: "center" }}>
            <Button noArrow color="#fff">
              Tell us about your project
            </Button>
          </div>
        </Banner>
      </Section>
    </Layout>
  )
}

export default WhatWeDo
