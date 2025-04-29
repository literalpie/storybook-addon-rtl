import React, { useState } from "react";
import { useChannel } from "@storybook/manager-api";
import { RTLDirection, UPDATE_EVENT_ID } from "src/constants";
import { IconButton } from "@storybook/components";
import { DirectionArrowsIcon } from "./DirectionArrowsIcon";

export const Tool = () => {
  const [dirState, setDirState] = useState<{ direction: RTLDirection }>({
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
        title="Text Direction"
        placeholder="Text Direction"
        onClick={() => {
          channel(UPDATE_EVENT_ID, {
            direction: dirState.direction === "rtl" ? "ltr" : "rtl",
            userInteraction: true,
          });
        }}
      >
        <DirectionArrowsIcon direction={dirState.direction} />
      </IconButton>
    </>
  );
};
