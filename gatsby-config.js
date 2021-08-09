module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-garden`,
      options: {
        contentPath: `${__dirname}/content/garden`,
        rootNote: `/welcome`,
      },
    },
  ],
  siteMetadata: {
    title: `Nathanʼs Working Notes`,
  },
}
