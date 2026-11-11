import { definePreview } from "@storybook/react-vite";
import addonDocs from "@storybook/addon-docs";
import addonRtl from "../dist/index";

export default definePreview({
  addons: [addonDocs(), addonRtl()],
  parameters: {
    backgrounds: {
      default: "light",
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
});
