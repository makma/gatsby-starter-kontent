module.exports = {
  siteMetadata: {
    title: `Gatsby starter site with Kentico Kontent`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `@kentico/gatsby-source-kontent`,
      options: {
        deliveryClientConfig: {
          projectId: '479c94ca-8760-00f5-6b07-15d19b791204',
          globalQueryConfig: {
            usePreviewMode: true, 
          },
          previewApiKey: 'ew0KICAiYWxnIjogIkhTMjU2IiwNCiAgInR5cCI6ICJKV1QiDQp9.ew0KICAianRpIjogIjAxNjAzMTFkOWU1ZTQ2MzI4MGEyMzU3ZWNlOWJjNjBmIiwNCiAgImlhdCI6ICIxNTc0MjUxMDY1IiwNCiAgImV4cCI6ICIxOTE5ODUxMDY1IiwNCiAgInByb2plY3RfaWQiOiAiNDc5Yzk0Y2E4NzYwMDBmNTZiMDcxNWQxOWI3OTEyMDQiLA0KICAidmVyIjogIjEuMC4wIiwNCiAgImF1ZCI6ICJwcmV2aWV3LmRlbGl2ZXIua2VudGljb2Nsb3VkLmNvbSINCn0.zaBcER3ZD8n83lLNXdz2b-vrFrtgn81oJqoy9-D-QJE',
          typeResolvers: []
        },
        languageCodenames: [
          `default`,
          `de-DE`,
          `cs-CZ`,
        ]
      }
    }
  ]
};
