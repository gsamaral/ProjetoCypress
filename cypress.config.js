const { defineConfig } = require('cypress')

module.exports = {
  projectId: "gxvd1w",
  
  e2e: {
    baseUrl : "https://alura-fotos.herokuapp.com",

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    reporter: 'mochawesome'

  },
};
