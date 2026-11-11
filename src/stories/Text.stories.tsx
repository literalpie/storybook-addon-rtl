import preview from "#.storybook/preview";
import { Text } from "./Text";
const meta = preview.meta({
  component: Text,
});

export const standard = meta.story({});

export const RTL = meta.story({
  // Note: Usually, globals should not be set at the story level.
  globals: {
    addonRtl: "rtl",
  },
});
