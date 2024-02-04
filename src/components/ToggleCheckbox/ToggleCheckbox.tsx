import React, { FC } from "react";
import {
  Toggle,
  ToggleInput,
  ToggleKnob,
  ToggleLabel,
  ToggleMessage,
} from "./ToggleCheckbox.styles";
import { useTheme } from "@storybook/theming";

export const ToggleCheckbox: FC<{
  checked: boolean;
  onChange: (change: boolean) => void;
}> = ({ checked, onChange }) => {
  const theme = useTheme();
  return (
    <Toggle>
      <ToggleLabel checked={checked}>
        <ToggleInput
          type="checkbox"
          aria-controls="rtl-status"
          data-testid="rtl-toggle-input"
          checked={checked}
          onChange={(change) => {
            onChange(change.target.checked);
          }}
        />
        <ToggleKnob checked={checked}>{"Enable right-to-left"}</ToggleKnob>
      </ToggleLabel>
      <ToggleMessage
        id="rtl-status"
        role="region"
        aria-live="polite"
        style={{ color: theme?.color?.defaultText }}
      >
        {checked ? "Right-to-left" : "Left-to-right"}
      </ToggleMessage>
    </Toggle>
  );
};
