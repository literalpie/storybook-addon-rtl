import type { StorybookConfig } from "@storybook/react-vite";
const config: StorybookConfig = {
  stories: ["../src/stories/**/*.stories.tsx"],
  addons: ["@storybook/addon-docs", import.meta.resolve("./local-preset.ts")],
  framework: "@storybook/react-vite",
};
export default config;
