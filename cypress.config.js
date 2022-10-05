const { defineConfig } = require('cypress');

module.exports = defineConfig({
    fixturesFolder: 'cypress/fixtures',
    screenshotsFolder: 'cypress/screenshots',
    video: false,
    viewportWidth: 1280,
    viewportHeight: 900,
    retries: 2,
    e2e: {
        // We've imported your old cypress plugins here.
        // You may want to clean this up later by importing these.
        setupNodeEvents(on, config) {
            return require('./cypress/plugins')(on, config);
        },
        baseUrl: 'http://localhost:3111',
    },
});
