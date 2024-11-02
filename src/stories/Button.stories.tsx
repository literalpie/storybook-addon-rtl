import { Meta } from "@storybook/react";
import { Button } from "./Button";
export default {
  component: Button,
  // decorators: [
  //   (storyFn, context) => {
  //     context.canvasElement.dir = "ltr";
  //     console.log(storyFn, context);
  //     return storyFn();
  //   },
  // ],
  globals: { "storybook-addon-rtl": "ltr" },
  tags: ["autodocs"],
} satisfies Meta;

export const standard = {};
export const RTL = {
  globals: { "storybook-addon-rtl": "rtl" },
  parameters: { direction: "rtl" },
};
