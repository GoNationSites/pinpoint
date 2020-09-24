module.exports = {
  siteMetadata: {
    title: `Pinpoint`,
    description: `Welcome to Pinpoint.`,
    author: `@GoNation`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {},
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon-32x32.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: `q1fbqg96`,
        dataset: `production`,
        // a token with read permissions is required
        // if you have a private dataset
        token:
          "skjgRXFGsAUDuORzbkA1gnYakZ61Yil0YC0dqqp3P6XylDcwWI8dmeWkTQkYGOEEaiXvXjFKAzI2Zdj10E5zCcgrwaKi8ldYBFH6R8sByv56txWdfjljpsiIIzypPQSPFNdkpMZAZo4wSH1McN9rJ8CjYsXnX2zO2CQ2Ed7bespQPA5uyR0Z",

        // If the Sanity GraphQL API was deployed using `--tag <name>`,
        // use `graphqlTag` to specify the tag name. Defaults to `default`.
        graphqlTag: "default",
      },
    },
  ],
}
