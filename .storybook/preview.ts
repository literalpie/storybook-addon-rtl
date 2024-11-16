import type { Preview } from "@storybook/react";

const preview: Preview = {
  initialGlobals: {
    addonRtl: "ltr",
  },
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
};

export default preview;
