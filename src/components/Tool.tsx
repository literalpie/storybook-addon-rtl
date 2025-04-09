import React from "react";
import { useGlobals, useStorybookApi } from "storybook/manager-api";
import { IconButton } from "storybook/internal/components";
import { DirectionArrowsIcon } from "./DirectionArrowsIcon";

export const Tool = () => {
  const [globals, setGlobals] = useGlobals();
  const storyGlobals = useStorybookApi().getStoryGlobals();
  return (
    <IconButton
      // If the current story has the global set, it can not be toggled in the UI
      disabled={storyGlobals.addonRtl !== undefined}
      onClick={() => {
        const newDirection = globals.addonRtl === "rtl" ? "ltr" : "rtl";
        setGlobals({ addonRtl: newDirection });
      }}
    >
      <DirectionArrowsIcon direction={globals.addonRtl} />
    </IconButton>
  );
};
