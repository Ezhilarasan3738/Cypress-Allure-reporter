const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'amduvt',
  defaultCommandTimeout: 60000,
  pageLoadTimeout: 80000,
  chromeWebSecurity: false,
  viewportWidth: 1366,
  viewportHeight: 768,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports/html',
    charts: true,
    reportPageTitle: 'My Test Suite',
    embeddedScreenshots: true,
    inlineAssets: true,
  },
  video: false,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'http://automationpractice.com/',
  },
})
