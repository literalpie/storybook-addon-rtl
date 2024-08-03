export const ADDON_ID = "storybook/rtl";
export const TOOL_ID = `${ADDON_ID}/rtl-tool`;

export const INITIALIZE_EVENT_ID = `${ADDON_ID}/rtl-initialize`;
/**
 * The ID for an event that is emitted in the Storybook channel whenever an change to the direction happens.
 * The event will include.
 * Events of this type should be accompanied by a parameter with a type of {@link RTLChangeEvent}
 */
export const UPDATE_EVENT_ID = `${ADDON_ID}/rtl-update`;

export type RTLDirection = "rtl" | "ltr";

export type RTLChangeEvent = {
  direction: RTLDirection;
  /**
   * Whether this event is the result of a user interaction,
   * or something else (like the initial state, or the parameter of a story)
   */
  userInteraction: boolean;
};
