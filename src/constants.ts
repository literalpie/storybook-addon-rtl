export const ADDON_ID = "storybook/rtl";
export const TOOL_ID = `${ADDON_ID}/rtl-tool`;
export const PANEL_ID = `${ADDON_ID}/rtl-panel`;
export const PARAM_KEY = `myAddonParameter`;

export const INITIALIZE_EVENT_ID = `${ADDON_ID}/rtl-initialize`;
/** 
 * The ID for an event that is emitted in the Storybook channel whenever an change to the direction happens.
 * The event will include
 */
export const UPDATE_EVENT_ID = `${ADDON_ID}/rtl-update`;

type RTLDirection = 'rtl' | 'ltr';
export type RTLChangeEvent = {
  direction: RTLDirection;
  /** 
   * Whether this event is the result of a user interaction, 
   * or something else (like the initial state, or the parameter of a story) 
   */
  userInteraction: boolean;
}
