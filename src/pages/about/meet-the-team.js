import React from "react"
import styled from "styled-components"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import HeaderBlock from "../../components/HeaderBlock"
import TeamCard from "../../components/TeamCard"
import Title from "../../components/Title"
import Team from "../../assets/team.png"
import { theme } from "../../global-styles"

import Steve from "../../assets/steve.png"
import TJ from "../../assets/tj.png"
import Tracy from "../../assets/tracy.png"
import Ryan from "../../assets/ryan.png"
import Arnie from "../../assets/arnie.png"
import Al from "../../assets/al.png"

const MemberWrapper = styled.div`
  /* padding: 2rem 1.5rem; */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: auto;
  justify-content: space-evenly;
  padding: 8rem 1.5rem;
`

const Box = styled.div`
  margin-bottom: 3rem;
`

const MeetTheTeam = () => {
  const content = [
    "You’ll work with a diverse crew of listeners, brainstormers, creatives, go-getters, and implementors with an ownership mentality. Many of us have multidisciplinary backgrounds, which provides a smoother and more efficient project experience.",
  ]

  const teamMembers = [
    {
      name: "Steve Gentile",
      position: "Co-Founder, Partner, and Director of Strategy",
      img: Steve,
    },
    {
      name: "TJ Andrews",
      position: "Managing Partner",
      img: TJ,
    },
    {
      name: "Tracy Rams",
      position: "Promotional Marketing Manager",
      img: Tracy,
    },
    {
      name: "Ryan Farrington",
      position: "Production Graphic Designer, Copywriter",
      img: Ryan,
    },
    {
      name: "Arnie Cuozzo",
      position: "Production Lead",
      img: Arnie,
    },
    {
      name: "Al Martone",
      position: "Fabrication Lead",
      img: Al,
    },
  ]

  return (
    <Layout>
      <SEO title="Meet The Team" />
      <HeaderBlock title="Meet The Team" content={content} img={Team} />
      <MemberWrapper>
        {teamMembers.map(member => (
          <Box>
            <TeamCard data={member} />
          </Box>
        ))}
      </MemberWrapper>
    </Layout>
  )
}

export default MeetTheTeam
