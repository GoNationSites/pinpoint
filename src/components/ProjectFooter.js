import React from "react"
import styled from "styled-components"
import { theme, device } from "../global-styles"
import BlockContent from "@sanity/block-content-to-react"

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
      padding: 0.25rem;
      @media ${device.tablet} {
        padding: 2rem;
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
  .footer-stats-wrapper {
    @media ${device.tablet} {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
    }
    strong,
    p {
      display: block;
      width: 100%;
      /* @media ${device.tablet} {
        padding: 2rem;
        width: 50%;
        padding: 0;
      } */
    }
    strong {
      color: ${theme.alternate};
    }
    p,
    ul {
      @media ${device.tablet} {
        padding: 0;
      }
    }
    ul {
      width: 100%;
      @media ${device.tablet} {
        display: flex;
        flex-wrap: wrap;
        li {
          width: 50%;
          padding-right: 0.75rem;
        }
      }
      @media ${device.laptop} {
        display: flex;
        flex-wrap: wrap;
        li {
          width: 33%;
          padding-right: 0.75rem;
        }
      }
      @media ${device.laptopL} {
        display: flex;
        flex-wrap: wrap;
        li {
          width: 25%;
          padding-right: 0.75rem;
        }
      }
    }
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
  // const renderBullets = bullets => bullets.map(bullet => <li>{bullet}</li>)

  const BlockRenderer = props => {
    const { style = "normal" } = props.node
    console.log("all props are: ", props)

    // if (/^h\d/.test(style)) {
    //   const level = style.replace(/[^\d]/g, "")
    //   return React.createElement(
    //     style,
    //     { className: `heading-${level}` },
    //     props.children
    //   )
    // }

    // if (style === "blockquote") {
    //   return <blockquote>- {props.children}</blockquote>
    // }

    // Fall back to default handling
    return BlockContent.defaultSerializers.types.block(props)
  }

  return (
    <Wrapper>
      {data && (
        <BlockContent
          blocks={data}
          className="footer-stats-wrapper"
          projectId="q1fbqg96"
          dataset="production"
          serializers={{ types: { block: BlockRenderer } }}
        />
      )}

      {/* <pre>{JSON.stringify(data, "", 2)}</pre> */}
    </Wrapper>
  )
}
export default ProjectFooter
