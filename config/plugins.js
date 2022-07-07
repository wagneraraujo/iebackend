module.exports = ({ env }) => ({
  email: {
    config: {
      provider: "sendgrid",
      providerOptions: {
        apiKey: env("SENDGRID_API_KEY"),
      },
      settings: {
        defaultFrom: "clubeiestrada@gmail.com",
        defaultReplyTo: "clubeiestrada@gmail.com",
      },
    },
  },
  "import-export-entries": {
    enabled: true,
  },
  menus: {
    config: {
      maxDepth: 3,
    },
  },
  // "random-sort": {
  //   enabled: true,
  // },
});
