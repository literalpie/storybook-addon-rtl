import { API, addons, types } from "@storybook/manager-api";
import { ADDON_ID, RTLDirection, TOOL_ID, UPDATE_EVENT_ID } from "./constants";
import { getDefaultTextDirection } from "./utils";
import { STORY_RENDERED } from "@storybook/core-events";
import { Tool } from "./components/Tool";

addons.register(ADDON_ID, (api) => {
  setDirectionOnStoryChange(api);

  addons.add(TOOL_ID, {
    id: "rtl-tool",
    hidden: true,
    type: types.TOOL,
    title: "RTL",
    disabled: true,
    render: Tool,
  });
});

export function setDirectionOnStoryChange(api: API) {
  const channel = addons.getChannel();
  // Keep track of the most recent value that was a result of user interaction
  // so we can return to this value whenever a story is opened that does not have a parameter
  let lastUserInteractionValue: RTLDirection;
  // Whenever a story is rendered, update the state to represent the parameter value of the story.
  // We do this here and not in the panel component because we want the parameter to be respected
  // even if the panel is never opened
  channel.on(STORY_RENDERED, () => {
    const lastUpdate = channel.last(UPDATE_EVENT_ID)?.[0];
    lastUserInteractionValue = lastUpdate?.userInteraction
      ? lastUpdate.direction
      : lastUserInteractionValue;

    const paramValue = api.getCurrentParameter("direction");
    let newDirection;
    if (paramValue) {
      newDirection = paramValue;
    } else if (lastUserInteractionValue) {
      newDirection = lastUserInteractionValue;
    } else {
      newDirection = getDefaultTextDirection(api);
    }
    channel.emit(UPDATE_EVENT_ID, {
      direction: newDirection,
      userInteraction: false,
    });
  });
}
