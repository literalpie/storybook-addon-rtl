import { test, describe, vi, expect, beforeEach } from "vitest";
import { RenderResult, act, render } from "@testing-library/react";
import React, { useState } from "react";
import { RTLPanelContainer } from "./RTLPanelContainer";
import { UPDATE_EVENT_ID } from "src/constants";

describe("RTLPanel", () => {
  const api = {
    getQueryParam: vi.fn(),
  };
  const channel = {
    on: vi.fn(),
    last: vi.fn(),
    removeListener: vi.fn(),
    emit: vi.fn(),
  };

  describe("without query parameter", () => {
    test("renders", () => {
      api.getQueryParam.mockReturnValue(undefined);
      const wrapper = render(<RTLPanelContainer />);
      expect(wrapper.container.firstChild).toMatchSnapshot();
    });
  });

  describe("with query parameter", () => {
    test("renders", () => {
      api.getQueryParam.mockReturnValue("rtl");
      const wrapper = render(<RTLPanelContainer />);
      expect(wrapper.container.firstChild).toMatchSnapshot();
    });
  });

  describe("with direction set while panel closed", () => {
    test("renders", () => {
      channel.last.mockReturnValue([{ direction: "rtl" }]);
      const wrapper = render(
        <RTLPanelContainer api={api as any} channel={channel} />,
      );
      expect(wrapper.container.firstChild).toMatchSnapshot();
    });
  });

  // Simulate a story param by emitting an event after the component is created
  describe("with story param", () => {
    let updateEventHandler: (direction: {
      direction: string;
    }) => void = () => {};
    let wrapper: RenderResult;
    beforeEach(() => {
      api.getQueryParam.mockReturnValue("rtl");
      channel.on.mockImplementation((eventID, handler) => {
        if (eventID === UPDATE_EVENT_ID) {
          updateEventHandler = handler;
        }
      });
      wrapper = render(
        <RTLPanelContainer api={api as any} channel={channel} />,
      );
    });

    test("renders", () => {
      act(() => {
        updateEventHandler({ direction: "rtl" });
      });

      expect(wrapper.container.firstChild).toMatchSnapshot();
    });

    test("responds to changes", () => {
      act(() => {
        updateEventHandler({ direction: "rtl" });
      });
      expect(wrapper.container.firstChild).toMatchSnapshot();

      act(() => {
        updateEventHandler({ direction: "ltr" });
      });
      expect(wrapper.container.firstChild).toMatchSnapshot();
    });
  });
});
