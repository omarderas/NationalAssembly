
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
const apiToken = process.env.STRAPI_API_TOKEN;
module.exports = {
  siteMetadata: {
    title: `Belize National Assembly`,
    description: `The National Assembly of Belize is the Legislature or Parliament of Belize. It consists of two Houses: the Senate (Upper House) and the House of Representatives (Lower House).`,
    author: `Jose Urbina`,
    siteUrl: `https://www.nationalassembly.gov.bz/`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon-bna.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        //apiURL: `https://dazzling-love-27c27bfaa6.strapiapp.com`,
        apiURL: `http://127.0.0.1:1338`,
        queryLimit: 1000,
        collectionTypes: ['act'],
        singleTypes: ['message'],
        },
    },
  ],

}
