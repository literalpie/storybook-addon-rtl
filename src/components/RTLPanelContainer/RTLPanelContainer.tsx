import React, { ReactElement, useState } from "react";
import { UPDATE_EVENT_ID } from "../../constants";
import { useChannel } from "@storybook/manager-api";
import { Panel } from "./RTLPanel.styles";
import { ToggleCheckbox } from "../ToggleCheckbox/ToggleCheckbox";

export const RTLPanelContainer = (): ReactElement => {
  const [dirState, setDirState] = useState({
    direction: "ltr",
  });
  const channel = useChannel({
    [UPDATE_EVENT_ID]: (updateEvent) => {
      setDirState({ direction: updateEvent.direction });
    },
  });
  return (
    <Panel>
      <ToggleCheckbox
        checked={dirState.direction === "rtl"}
        onChange={(checked) =>
          channel(UPDATE_EVENT_ID, {
            direction: checked ? "rtl" : "ltr",
            userInteraction: true,
          })
        }
      />
    </Panel>
  );
};
