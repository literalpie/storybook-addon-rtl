import React, { useState } from "react";
import { useChannel } from "@storybook/manager-api";
import { UPDATE_EVENT_ID } from "src/constants";
import { IconButton, Icons } from "@storybook/components";
import { DirectionArrowsIcon } from "./DirectionArrowsIcon";

export const Tool = () => {
  const [dirState, setDirState] = useState<{ direction: "ltr" | "rtl" }>({
    direction: "ltr",
  });
  const channel = useChannel({
    [UPDATE_EVENT_ID]: (updateEvent) => {
      setDirState({ direction: updateEvent.direction });
    },
  });

  return (
    <>
      <IconButton
        placeholder={"Text Direction"}
        onClick={() => {
          channel(UPDATE_EVENT_ID, {
            direction: dirState.direction === "rtl" ? "ltr" : "rtl",
            userInteraction: true,
          });
        }}
      >
        {/* <DirectionArrowsIcon direction={dirState.direction} /> */}
        {/* <Icons icon="arrowleft" /> */}
      </IconButton>
    </>
  );
};
