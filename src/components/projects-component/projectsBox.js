import React, { useState } from "react"
import styled from "styled-components"

import Button from "../button"
import ProjectsContent from "./projectsContent"
import Lets from "../../assets/lets.png"
import CreateBG from "../../assets/create-bg.png"
import RemarkableBG from "../../assets/remarkable-bg.png"

const Flex = styled.div`
  display: flex;
  align-items: center;

  .projects__left {
    width: auto;
    position: absolute;
    left: 0;
  }
  .projects__right {
    margin-left: auto;
    position: relative;
  }
  .meet-the-team-container {
    position: absolute;
    bottom: 4rem;
    right: 4rem;
  }
`

const items = [
  {
    title: "Let's",
    desc:
      "Our philosophy lays the foundation that we are your partner. Your wins are our wins. Your losses, our losses.",
  },
  {
    title: "Create",
    desc:
      "Next, we bring in our unique, problem-solving kind of creativity. From the beginning of the project, we uncover the why behind your goal… to make sure what we’re doing lines up with your true need. We anticipate issues and constraints that will come up. What others see as challenging we find stimulating. And we’re always looking for opportunities that we can help you exploit.",
  },
  {
    title: "Remarkable",
    desc:
      "When you’re ready to move from concept to execution, forget the chaos of dealing with multiple companies. Our team has the skills…and in-house production capabilities that take the load off your shoulders while we make the dream a reality. Everything we conceptualize, design, and fabricate is done intentionally: to make something remarkable that helps bring your brand to life in the hearts of your audience.",
  },
]

const ProjectsBox = () => {
  const [activeTab, setActiveTab] = useState(items[0])

  const getImg = () => {
    switch (activeTab.title) {
      case "Let's":
        return Lets
      case "Create":
        return CreateBG
      case "Remarkable":
        return RemarkableBG
    }
  }
  return (
    <Flex>
      <div className="projects__left">
        <ProjectsContent
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          items={items}
        />
      </div>
      <div className="projects__right">
        <img src={getImg(activeTab.title)} alt="Meet The Team" />
        <div className="meet-the-team-container">
          <Button to="/team" color="#fff">
            Meet The Team
          </Button>
        </div>
      </div>
    </Flex>
  )
}

export default ProjectsBox
