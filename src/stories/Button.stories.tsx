import { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { expect, within } from "@storybook/test";
import { getElementDirection } from "./utils";

export default {
  component: Button,
  tags: ["autodocs"],
} satisfies Meta;

export const standard = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.findByText("Click Me!");
    expect(getElementDirection(await button)).toEqual("ltr");
  },
} satisfies StoryObj;

export const RTL = {
  globals: { addonRtl: "rtl" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.findByText("Click Me!");
    expect(getElementDirection(await button)).toEqual("rtl");
  },
} satisfies StoryObj;
