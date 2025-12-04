const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '7ttgrv',
  e2e: {
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      charts: true,
      reportTitle: ' Course project Cypress',
      reportPageTitle: 'Course project Cypress'
    },
    baseUrl: "https://automationpratice.com.br/",
    defaultCommandTimeout: 5000,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
