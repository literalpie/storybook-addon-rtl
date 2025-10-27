import { definePreviewAddon } from "storybook/internal/csf";

import addonAnnotations from "./preview";
import type { RTLDirection } from "./constants";
export { type RTLDirection } from "./constants";

export default () =>
  definePreviewAddon<{
    globals: {
      addonRtl: RTLDirection;
    };
    initialGlobals: {
      addonRtl: RTLDirection;
    };
  }>(addonAnnotations);
