import { Meta } from "@storybook/react";
import { Button } from "./Button";
export default {
  component: Button,
} satisfies Meta;

export const standard = {};
export const RTL = {
  parameters: { direction: "rtl" },
};
