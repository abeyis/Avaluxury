const cucumber = require('cypress-cucumber-preprocessor').default
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "jfog1g",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('file:preprocessor', cucumber());
      require("cypress-localstorage-commands/plugin")(on,config);
      return config;
    },
    specPattern: "cypress/e2e/features/**/*.feature"
  },
  env:{
    avaluxury_endpoint:'https://avaluxu.myshopify.com/',
    CYPRESS_RECORD_KEY:"cc24700e-4019-4a08-a0e6-9b3d6d7a5a42"
  }
});