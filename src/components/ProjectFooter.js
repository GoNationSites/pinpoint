import React from "react"
import styled from "styled-components"
import { theme, device } from "../global-styles"

const Wrapper = styled.div`
  height: auto;
  padding: 2rem 1.5rem;
  background: var(--unnamed-color-f7f7f7) 0% 0% no-repeat padding-box;
  background: #f7f7f7 0% 0% no-repeat padding-box;
  opacity: 1;

  > div {
    max-width: 1640px;
    margin: auto;
    padding: 1.5rem 0;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: column;
    @media ${device.tablet} {
      align-items: flex-start;
      flex-direction: row;
    }
    > div {
      width: 100%;
      padding: 2rem;
      @media ${device.tablet} {
        width: 25%;
        padding: 0;
      }
    }
  }
  li {
    font-size: 18.5px;
    line-height: 1.75rem;
    margin-bottom: 0.5rem;
    color: ${theme.text};
  }
  h2 {
    font-size: 18.5px;
    letter-spacing: 0.18px;
    color: ${theme.alternate};
  }
`

const BulletWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: auto;
`

const FooterBlock = styled.div`
  /* width: 25%; */
`

const ProjectFooter = ({ data }) => {
  const renderBullets = bullets => bullets.map(bullet => <li>{bullet}</li>)

  return (
    <Wrapper>
      <div>
        {data.map(stat => (
          <div>
            <h2>{stat.headingTitle}</h2>
            <BulletWrapper>{renderBullets(stat.bulletPoints)}</BulletWrapper>
          </div>
        ))}
      </div>

      {/* <pre>{JSON.stringify(data, "", 2)}</pre> */}
    </Wrapper>
  )
}
export default ProjectFooter
