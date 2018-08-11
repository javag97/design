module.exports = {
  siteMetadata: {
    title: 'Javier Garcia\'s portfolio',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages'
      }
    },
    'gatsby-transformer-remark',
  ],
}
