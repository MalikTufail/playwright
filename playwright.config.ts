import type { PlaywrightTestConfig } from "@playwright/test";
const config: PlaywrightTestConfig = {
  testMatch: ["tests/example.test.js"],
  use: {
    // headless: false,
    screenshot: 'only-on-failure'
  
  },
  reporter: 'experimental-allure-playwright'
};
export default config;