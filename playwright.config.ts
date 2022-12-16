import type { PlaywrightTestConfig } from "@playwright/test";
const config: PlaywrightTestConfig = {
  testMatch: ["tests/example.test.js"],
  use: {
    headless: false,
  },
};
export default config;