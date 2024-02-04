import { expect, describe, beforeEach, vi, test } from "vitest";
import React from "react";
import { fireEvent, render, act } from "@testing-library/react";
import { ToggleCheckbox } from "./ToggleCheckbox";

describe("ToggleCheckbox", () => {
  let spy: any;

  beforeEach(() => {
    spy = vi.fn();
  });

  describe("default", () => {
    test("renders", () => {
      const wrapper = render(<ToggleCheckbox onChange={spy} checked={false} />);
      expect(wrapper.container.firstChild).toMatchSnapshot();
    });

    test("invokes `onChange` when changed", () => {
      const wrapper = render(<ToggleCheckbox onChange={spy} checked={false} />);
      act(() => {
        fireEvent.click(wrapper.getAllByTestId("rtl-toggle-input")[1]);
      });
      expect(spy).toHaveBeenCalledWith(true);
    });
  });

  describe("unchecked", () => {
    test("renders", () => {
      const wrapper = render(<ToggleCheckbox checked={false} onChange={spy} />);
      expect(wrapper.container.firstChild).toMatchSnapshot();
    });
  });

  describe("checked", () => {
    test("renders", () => {
      const wrapper = render(<ToggleCheckbox checked onChange={spy} />);
      expect(wrapper.container.firstChild).toMatchSnapshot();
    });
  });
});
