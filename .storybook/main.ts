import type { StorybookConfig } from "@storybook/react-vite";
const config: StorybookConfig = {
  stories: ["../src/stories/**/*.stories.tsx"],
  addons: ["@storybook/addon-docs", "./local-preset.ts"],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
};
export default config;
