import { Meta } from "@storybook/react";
import { Text } from "./Text";
export default {
  component: Text,
} satisfies Meta;

export const standard = {};
export const RTL = {
  parameters: { direction: "rtl" },
};
