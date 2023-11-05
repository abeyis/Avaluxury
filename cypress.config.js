const cucumber = require('cypress-cucumber-preprocessor').default
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "n8qri5",
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
    CYPRESS_RECORD_KEY:"4c50fd85-f072-4941-bcae-886c30143c69"


  }
});
