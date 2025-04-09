import { Meta, StoryObj } from "@storybook/react";
import { Css } from "./Css";
export default {
  component: Css,
} satisfies Meta;

export const standard = {};
export const RTL = {
  // Note: Usually, globals should not be set at the story level.
  globals: {
    addonRtl: "rtl",
  },
} satisfies StoryObj;
