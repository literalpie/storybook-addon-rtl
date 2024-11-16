/* eslint-disable @typescript-eslint/no-explicit-any */
import { API } from "@storybook/manager-api";
import { getDefaultTextDirection } from "./utils";
import { describe, test, expect, vi } from "vitest";

describe("utils", () => {
  describe(".getDefaultTextDirection", () => {
    test("returns the text direction from the query params", () => {
      const api = {
        getQueryParam: vi.fn().mockReturnValue("rtl"),
        getGlobals: vi.fn().mockReturnValue("ltr"),
      };
      vi.spyOn<any, any>(window, "getComputedStyle").mockReturnValue({
        direction: "",
      });
      expect(getDefaultTextDirection(api as unknown as API)).toBe("rtl");
    });

    test("returns `ltr` as a fallback", () => {
      const api = {
        getQueryParam: vi.fn().mockReturnValue(undefined),
        getGlobals: vi.fn().mockReturnValue("ltr"),
      };
      vi.spyOn<any, any>(window, "getComputedStyle").mockReturnValue({
        direction: "",
      });
      expect(getDefaultTextDirection(api as unknown as API)).toBe("ltr");
    });
  });
});
