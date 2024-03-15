const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '21h8vb',
  e2e: {
    baseUrl: 'https://automationpratice.com.br/',
    projectId: "21h8vb",
    // Seleciona a url global no projeto
    defaultCommandTimeout: 10000,
    // Seleciona o timeout para espera de tempo
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
