import { addons, types } from "storybook/manager-api";
import { ADDON_ID, TOOL_ID } from "./constants";

import { Tool } from "./components/Tool";

addons.register(ADDON_ID, () => {
  addons.add(TOOL_ID, {
    id: "rtl-tool",
    type: types.TOOL,
    title: "RTL",
    render: Tool,
  });
});
