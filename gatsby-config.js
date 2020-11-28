module.exports = {
  siteMetadata: {
    title: `Théo Mesnil _ Front-end developper`,
    description: `Front end developper based in Paris.`,
    author: `@mesniltheo`,
    siteUrl: `https://theomesnil.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Théo Mesnil`,
        short_name: `Théo Mesnil`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-43461131-1",
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Baloo 2\:400,600`,
          `Nunito Sans\:200`, // you can also specify font weights and styles
        ],
        display: "swap",
      },
    },
  ],
}
