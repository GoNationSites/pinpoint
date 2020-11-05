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
  result.data.allSanityProject.edges.forEach(({ node }) => {
    createPage({
      path: `the-work/${node.slug.current}`,
      component: path.resolve(`./src/templates/project.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        data: node,
      },
    })
  })
}
