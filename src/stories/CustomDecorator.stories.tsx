import preview from "#.storybook/preview";
import React from "react";
import { Decorator } from "@storybook/react-vite";
import { expect, userEvent, within } from "storybook/test";
import { getElementDirection } from "./utils";
import { useGlobals } from "storybook/preview-api";

const SimpleText = () => {
  return <div>This is some example text</div>;
};

/**
 * This is an example decorator that shows how the Storybook channel API can be used
 * to read and change the current direction of the addon.
 */
const withDirectionToggle: Decorator = (Story) => {
  const [globals, setGlobals] = useGlobals();
  const direction = globals.addonRtl;
  const setDirection = (direction: "ltr" | "rtl") => {
    setGlobals({ addonRtl: direction });
  };

  return (
    <div>
      The direction is {direction}
      <button onClick={() => setDirection(direction === "ltr" ? "rtl" : "ltr")}>
        Toggle Direction
      </button>
      <Story />
    </div>
  );
};

const meta = preview.meta({
  decorators: [withDirectionToggle],
  component: SimpleText,
});

export const CustomDecorator = meta.story({});

export const TestToggle = meta.story({
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const startDirection = getElementDirection(canvasElement);
    canvas.findByText(`The direction is ${startDirection}`);

    const button = await canvas.findByText("Toggle Direction");

    await userEvent.click(button);
    const newDirection = startDirection === "ltr" ? "rtl" : "ltr";
    await canvas.findByText(`The direction is ${newDirection}`);
    expect(getElementDirection(canvasElement)).toBe(newDirection);
  },
});
