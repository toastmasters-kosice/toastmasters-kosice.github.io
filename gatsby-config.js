module.exports = {
  siteMetadata: {
    title: 'Toastmasters Košice',
    name: `Toastmasters Košice`,
    siteUrl: `https://www.toastmasterskosice.sk`,
    description:
      'Sme spoločenský klub pre tréning komunikačných, rečníckych a vodcovských zručností.',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/img`,
        name: 'uploads',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'images',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'uploads',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'static',
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-cookiehub-banner`,
      options: {
        cookieHubId: "c97f3bc5",
        cookieHubV2Api: true,
        categories: [
          {
            categoryName: 'analytics',
            cookieName: 'gatsby-plugin-google-analytics-gdpr_cookies-enabled'
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics-gdpr`,
      options: {
        trackingId: "UA-142522378-1",
        anonymizeIP: true,
        autoStartWithCookiesEnabled: false,
      },
    },
    {
      resolve: "gatsby-plugin-sitemap"
    },
    {
      resolve: 'gatsby-plugin-purgecss', // purges all unused/unreferenced css rules
      options: {
        develop: true, // Activates purging in npm run develop
        whitelist: ['video-container', 'video-iframe'],
        purgeOnly: ['/all.sass'], // applies purging only on the bulma css file
      },
    },
  ],
}
