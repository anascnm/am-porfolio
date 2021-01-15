module.exports = {

  //-- SITE SETTINGS -----
  author: "@konstantinmuenster",
  siteTitle: "Gatsby Starter Portfolio Minimal",
  siteShortTitle: "AM.", // Used as logo text in header, footer, and splash screen
  siteDescription: "A modern one-page portfolio with a clean yet expressive design.",
  siteUrl: "https://gatsby-starter-portfolio-minimal.netlify.app/",
  siteLanguage: "en_US",
  siteIcon: "content/favicon.png", // Relative to gatsby-config file
  seoTitleSuffix: "Portfolio Minimal", // SEO title syntax will be e.g. "Imprint - {seoTitleSuffix}"

  // -- THEME SETTINGS -----
  colors: {
    lightTheme: {
      primary: "#000000",
      secondary: "#FFF4D9",
      tertiary: "#F2F2F2",
      text: "#000000",
      subtext: "#555555",
      background: "#FFFFFF",
      card: "#FFFFFF",
      scrollBar: "rgba(0, 0, 0, 0.5)",
      boxShadow: "rgba(0, 0, 0, 0.16)",
      boxShadowHover: "rgba(0, 0, 0, 0.32)",
    },
    darkTheme: {
      primary: "#FAFAFA",
      secondary: "#2A2926",
      tertiary: "#252525",
      text: "rgba(255, 255, 255, 0.87)",
      subtext: "#AAAAAA",
      background: "#121212",
      card: "#1C1C1C",
      scrollBar: "rgba(255, 255, 255, 0.5)",
      boxShadow: "rgba(0, 0, 0, 0.16)",
      boxShadowHover: "rgba(0, 0, 0, 0.32)",
    },
  },
  fonts: {
    primary: "Roboto, Arial, sans-serif",
  },

  // You can create your own Medium feed with this rss to json converter: https://rss2json.com/
    // To access your Medium RSS feed, just replace this url with your username: https://iq.opengenus.org/author/anastasia/
 iqgenusRssFeed: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Frss.app%2Ffeeds%2FEdAS5qj8Ndp06RXg.xml",
  shownArticles: 3,
    

  //-- SOCIAL MEDIA SETTINGS -----
   // There are icons available for the following platforms: 
    // IQ Genus Twitter, GitHub, Behance
    socialMedia: [
      {
          name: "Github",
          url: "https://github.com/anascnm"
      },
      {
          name: "Behance",
          url: "https://www.behance.net/anascnm/"
      },
      {
          name: "Twitter",
          url: "https://www.twitter.com/anas_cnm/"
      },
  ],

  //-- NAVIGATION SETTINGS -----
  navLinks: {
    menu: [
      {
        name: "About",
        url: "/about",
      },
      {
        name: "Features",
        url: "/#projects",
      },
      {
        name: "Project",
        url: "/projects",
      },
      
    ],
    button: {
      name: "Contact",
      url: "/#contact",
    },
  },
  footerLinks: [
    {
        name: "Github",
        url: ""
    },
    {
        name: "Behance",
        url: ""
    },
    {
      name: "OpenGenus",
      url: ""
  }
]
}
