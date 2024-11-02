import type { Preview } from "@storybook/react";

const preview: Preview = {
  globalTypes: {
    rtl: {
      toolbar: {
        title: "Direction",
        icon: "circlehollow",
        items: ["rtl", "ltr"],
      },
    },
  },
  initialGlobals: {
    rtl: "rtl",
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
