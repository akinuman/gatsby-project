module.exports = {
  siteMetadata: {
    title: "Portfolio Website",
    description: "I'm Frontend Developer",
    url: "https://akinuman.tk",
    image: "./src/images/uman.png",
    twitterUsername: "@AkinUman",
    author: "akinUman"
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    `gatsby-plugin-offline`,
    `gatsby-plugin-transition-link`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Poppins`
        ],
        display: 'swap'
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    
  ],
};
