const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './e2e',
  timeout: 30000, //ako traje 30s prekidaj
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? 'github' : 'list', //ispis formatiran za github actions ui
  use: {
    baseURL: 'http://localhost:3000',
    headless: true, //browser se pokrece nevidljivo
    screenshot: 'only-on-failure', //debug
  },
  webServer: {
    command: 'npm start',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
    timeout: 120000,
    env: { BROWSER: 'none' },
  },
});