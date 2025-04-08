import { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { expect, within } from "storybook/test";
import { getElementDirection } from "./utils";

/** When using docs, all stories will be controlled by the global.  */
export default {
  component: Button,
  args: { text: "Click Me!" },
  tags: ["autodocs"],
} satisfies Meta;

export const standard = {
  play: async ({ canvasElement, context }) => {
    const globalSetDirection = context.globals.addonRtl;
    const canvas = within(canvasElement);
    const button = canvas.findByText("Click Me!");
    expect(getElementDirection(await button)).toEqual(globalSetDirection);
  },
} satisfies StoryObj<typeof Button>;

/**
 * Because this story has the global set at the story level,
 * changing the global in the toolbar will not affect it.
 */
export const RTL = {
  // Note: Usually, globals should not be set at the story level.
  globals: {
    addonRtl: "rtl",
  },
  play: async ({ canvasElement, context }) => {
    const globalSetDirection = context.globals.addonRtl;
    const canvas = within(canvasElement);
    const button = canvas.findByText("Click Me!");
    expect(globalSetDirection).toEqual("rtl");
    expect(getElementDirection(await button)).toEqual("rtl");
  },
} satisfies StoryObj<typeof Button>;
