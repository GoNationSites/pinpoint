const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allSanityProject {
        edges {
          node {
            title
            subtitle
            description
            footerBlurb
            bodyTextBlurb
            slug {
              current
            }
            mainImage {
              asset {
                url
              }
            }
            projectImages {
              asset {
                url
              }
            }
          }
        }
      }
    }
  `)
  const getPreviousProject = id =>
    result.data.allSanityProject.edges[id - 1]
      ? result.data.allSanityProject.edges[id - 1]
      : null
  const getNextProject = id =>
    result.data.allSanityProject.edges[id + 1]
      ? result.data.allSanityProject.edges[id + 1]
      : null

  const projectLength = result.data.allSanityProject.edges.length
  result.data.allSanityProject.edges.forEach(({ node }, idx) => {
    createPage({
      path: `the-work/${node.slug.current}`,
      component: path.resolve(`./src/templates/project.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        data: node,
        previousProject: getPreviousProject(idx),
        nextProject: getNextProject(idx),
        lastProject:
          result.data.allSanityProject.edges[projectLength - 1].node.slug
            .current,
        firstProject: result.data.allSanityProject.edges[0].node.slug.current,
      },
    })
  })
}
