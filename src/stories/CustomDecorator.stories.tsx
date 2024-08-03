import React, { useState } from "react";
import { useChannel } from "@storybook/preview-api";
import { RTL_UPDATE_EVENT, RTLChangeEvent } from "../index";
import { Decorator, Meta } from "@storybook/react";

const SimpleText = () => {
  return <div>This is some example text</div>;
};

/**
 * This is an example decorator that shows how the Storybook channel API can be used
 * to read and change the current direction of the addon.
 */
const withDirectionToggle: Decorator = (Story) => {
  const [direction, setDirection] = useState<"ltr" | "rtl">("ltr");
  const channel = useChannel({
    // This is the even that is emitted when the direction changes.
    // Use this function to react to direction changes.
    [RTL_UPDATE_EVENT]: (directionUpdateEvent: RTLChangeEvent) => {
      setDirection(directionUpdateEvent.direction);
    },
  });
  const toggleDirection = () =>
    // If you want to change the direction set by the addon, you can emit the event yourself.
    channel(RTL_UPDATE_EVENT, {
      direction: direction === "ltr" ? "rtl" : "ltr",
    } as RTLChangeEvent);
  return (
    <div>
      The direction is {direction}
      <button onClick={toggleDirection}>Toggle Direction</button>
      <Story />
    </div>
  );
};

export const CustomDecorator = {};
export default {
  decorators: [withDirectionToggle],
  component: SimpleText,
} satisfies Meta;
