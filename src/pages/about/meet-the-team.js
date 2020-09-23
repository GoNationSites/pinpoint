import React, { useState } from "react"
import styled from "styled-components"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import HeaderBlock from "../../components/HeaderBlock"
import TeamCard from "../../components/TeamCard"
import ActiveMember from "../../components/ActiveMember"
import Team from "../../assets/team.png"

import Steve from "../../assets/steve.png"
import TJ from "../../assets/tj.png"
import Tracy from "../../assets/tracy.png"
import Ryan from "../../assets/ryan.png"
import Arnie from "../../assets/arnie.png"
import Al from "../../assets/al.png"

const MemberWrapper = styled.div`
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
  const [activeMember, setActiveMember] = useState(null)
  const content = [
    "You’ll work with a diverse crew of listeners, brainstormers, creatives, go-getters, and implementors with an ownership mentality. Many of us have multidisciplinary backgrounds, which provides a smoother and more efficient project experience.",
  ]

  const teamMembers = [
    {
      name: "Steve Gentile",
      position: "Co-Founder, Partner, and Director of Strategy",
      img: Steve,
      description: [
        `Steve’s fierce passion for business and a relentless hunger to never stop learning could be credited for much of Pinpoint’s meteoric growth. He holds a B.S. in Advertising from Southern Connecticut State University. Steve has thrived in self-employment since age 18, never having held a “normal” job. His specialties include marketing, ideation, strategy, events, design, and business development.`,

        `He’s always looking out for our clients’ best interests and is energized by thinking up exciting ways to engage their customers. Steve lives out business coach Tony Robbins’ words: “The only limit to your impact is your imagination and commitment.`,

        `When Steve is not developing award-winning brand experiences, Steve takes the time to go on adventures, traveling around the world.`,
      ],
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
      {activeMember !== null ? (
        <ActiveMember setActiveMember={setActiveMember} data={activeMember} />
      ) : (
        ""
      )}
      <MemberWrapper>
        {teamMembers.map(member => (
          <Box>
            <TeamCard data={member} setActiveMember={setActiveMember} />
          </Box>
        ))}
      </MemberWrapper>
    </Layout>
  )
}

export default MeetTheTeam
