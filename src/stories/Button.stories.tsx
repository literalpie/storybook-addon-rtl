import preview from "#.storybook/preview";
import { Button } from "./Button";
import { expect, within } from "storybook/test";
import { getElementDirection } from "./utils";

/** When using docs, all stories will be controlled by the global.  */
const meta = preview.meta({
  component: Button,
  args: { text: "Click Me!" },
  tags: ["autodocs"],
});
export default meta;

export const standard = meta.story({
  play: async ({ canvasElement, context }) => {
    const globalSetDirection = context.globals.addonRtl;
    const canvas = within(canvasElement);
    const button = canvas.findByText("Click Me!");
    expect(getElementDirection(await button)).toEqual(globalSetDirection);
  },
});

/**
 * Because this story has the global set at the story level,
 * changing the global in the toolbar will not affect it.
 */
export const RTL = meta.story({
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
});
