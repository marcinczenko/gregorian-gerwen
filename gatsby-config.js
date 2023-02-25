module.exports = {
  siteMetadata: {
    title: 'Gregorian Gerwen',
    editBaseUrl: 'https://github.com/marcinczenko/gregorian-gerwen/blob/master'
  },
  plugins: [
    {
      resolve: '@confluenza/gatsby-theme-confluenza',
      options: {
        mdx: false,
        ignore: []
      }
    },
    'gatsby-plugin-emotion',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-root-import',
    'gatsby-plugin-postcss'
  ]
}
