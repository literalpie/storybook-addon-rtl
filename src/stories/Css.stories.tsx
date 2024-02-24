import { Meta } from "@storybook/react";
import { Css } from "./Css";
export default {
  component: Css,
} satisfies Meta;

export const standard = {};
export const RTL = {
  parameters: { direction: "rtl" },
};
