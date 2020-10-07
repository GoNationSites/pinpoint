import React, { useState } from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { device } from "../../global-styles"
import { Link, Element } from "react-scroll"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import HeaderBlock from "../../components/HeaderBlock"
import TeamCard from "../../components/TeamCard"
import ActiveMember from "../../components/ActiveMember"
import Team from "../../assets/team.png"

const MemberWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: auto;
  justify-content: space-evenly;
  padding: 2rem 1.5rem;
  @media ${device.laptop} {
    padding: 8rem 1.5rem;
  }
`

const Box = styled.div`
  margin-bottom: 3rem;

  @media ${device.laptop} {
    width: 50%;
    padding: 2rem;
  }
`

const MeetTheTeam = ({ data }) => {
  const [activeMember, setActiveMember] = useState(null)
  const teamMembers = data.allSanityTeamMember.edges
  const content = [
    "You’ll work with a diverse crew of listeners, brainstormers, creatives, go-getters, and implementors with an ownership mentality. Many of us have multidisciplinary backgrounds, which provides a smoother and more efficient project experience.",
  ]

  return (
    <Layout>
      <SEO title="Meet The Team" />
      <HeaderBlock title="Meet The Team" content={content} img={"team.png"} />
      <Element name="activeMember">
        {activeMember !== null ? (
          <ActiveMember setActiveMember={setActiveMember} data={activeMember} />
        ) : (
          ""
        )}
      </Element>
      <MemberWrapper>
        {teamMembers.map(({ node }) => (
          <Box>
            <Link to={"activeMember"} smooth duration={500} delay={250}>
              <TeamCard data={node} setActiveMember={setActiveMember} />
            </Link>
          </Box>
        ))}
      </MemberWrapper>
    </Layout>
  )
}

export default MeetTheTeam

export const query = graphql`
  {
    allSanityTeamMember {
      edges {
        node {
          person {
            position
            image {
              asset {
                fluid {
                  src
                  srcWebp
                }
              }
            }
            bio
          }
          memberName
        }
      }
    }
  }
`
