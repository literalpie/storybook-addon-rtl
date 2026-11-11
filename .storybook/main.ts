import { defineMain } from "@storybook/react-vite/node";

export default defineMain({
  stories: ["../src/stories/**/*.stories.tsx"],
  addons: ["@storybook/addon-docs", import.meta.resolve("./local-preset.ts")],
  framework: "@storybook/react-vite",
});
