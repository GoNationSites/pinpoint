import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeaderBlock from "../components/HeaderBlock"
import GrayBox from "../components/GrayBox"
import InfoIcon from "../components/InfoIcon"
import img from "../assets/WhatWeDo.png"

import Apparel from "../assets/what-we-do/apparel.png"
import Creative from "../assets/what-we-do/creative.png"
import Fabricated from "../assets/what-we-do/fabricated.png"
import Print from "../assets/what-we-do/print.png"
import Promotions from "../assets/what-we-do/promotions.png"
import Signs from "../assets/what-we-do/signs.png"
import Strategy from "../assets/what-we-do/strategy.png"
import Mail from "../assets/what-we-do/mail.png"

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
`

const WhatWeDo = () => {
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
    </Layout>
  )
}

export default WhatWeDo
