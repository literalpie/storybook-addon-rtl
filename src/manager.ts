import { API, addons, types } from "@storybook/manager-api";
import {
  ADDON_ID,
  INITIALIZE_EVENT_ID,
  RTLDirection,
  TOOL_ID,
  UPDATE_EVENT_ID,
} from "./constants";
import { getDefaultTextDirection } from "./utils";
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

  channel.on(UPDATE_EVENT_ID, (event) => {
    const newDirection = event.direction;
    if (api.getGlobals().addonRtl !== newDirection) {
      api.updateGlobals({ addonRtl: newDirection });
    }
  });
  // Whenever a story is initialized, update the state to represent the parameter value of the story.
  channel.on(INITIALIZE_EVENT_ID, () => {
    const lastUpdate = channel.last(UPDATE_EVENT_ID)?.[0];
    lastUserInteractionValue = lastUpdate?.userInteraction
      ? lastUpdate.direction
      : lastUserInteractionValue;

    const paramValue = api.getCurrentParameter("direction");
    const storyGlobal = api.getStoryGlobals().addonRtl;
    let newDirection;
    // storyGlobal gets the highest precedence because if it is set, the value of global cannot be changed.
    if (storyGlobal !== undefined) {
      newDirection = storyGlobal;
    } else if (paramValue) {
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
