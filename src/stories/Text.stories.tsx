import { Meta } from "@storybook/react";
import { Text } from "./Text";
export default {
  component: Text,
} satisfies Meta;

export const standard = {};

export const RTL = {
  // Note: Usually, globals should not be set at the story level.
  globals: {
    addonRtl: "rtl",
  },
};
