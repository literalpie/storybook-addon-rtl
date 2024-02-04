import React from "react";

import { ToggleCheckbox } from "../src/components/ToggleCheckbox/ToggleCheckbox";

export default {
  title: "RTLToggle",
  component: ToggleCheckbox,
  render: (args) => <ToggleCheckbox {...args} />,
};

export const basic = {};

export const unchecked = {};
export const checked = { args: { checked: true } };

export const rtlParameter = { parameters: { direction: "rtl" } };
