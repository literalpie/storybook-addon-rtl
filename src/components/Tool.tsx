import React from "react";
import {
  useChannel,
  useGlobals,
  useStorybookApi,
} from "@storybook/manager-api";
import { UPDATE_EVENT_ID } from "src/constants";
import { IconButton } from "@storybook/components";
import { DirectionArrowsIcon } from "./DirectionArrowsIcon";

export const Tool = () => {
  const channel = useChannel({});
  const [globals] = useGlobals();
  const storyGlobals = useStorybookApi().getStoryGlobals();
  console.log("story", storyGlobals);
  return (
    <>
      blah
      <IconButton
        disabled={storyGlobals.addonRtl !== undefined}
        aria-label="Text Direction"
        onClick={() => {
          const newDirection = globals.addonRtl === "rtl" ? "ltr" : "rtl";
          // The value needs to be set with the event like this so we can include userInteraction: true
          // so it will take higher priority that story change events.
          // The listener added in manager.ts will make sure the value makes its way to "globals"
          channel(UPDATE_EVENT_ID, {
            direction: newDirection,
            userInteraction: true,
          });
        }}
      >
        <DirectionArrowsIcon direction={globals.addonRtl} />
      </IconButton>
    </>
  );
};
