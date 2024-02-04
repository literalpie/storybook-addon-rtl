import { getDefaultTextDirection, setTextDirection } from "./utils";
import { describe, test, expect, vi } from "vitest";
describe("utils", () => {
  describe(".getDefaultTextDirection", () => {
    test("returns the text direction from the query params", () => {
      const api = {
        getQueryParam: vi.fn().mockReturnValue("rtl"),
      };
      vi.spyOn<any, any>(window, "getComputedStyle").mockReturnValue({
        direction: "",
      });
      expect(getDefaultTextDirection(api)).toBe("rtl");
    });

    test("returns the text direction from the html tag", () => {
      const api = {
        getQueryParam: vi.fn().mockReturnValue(undefined),
      };
      vi.spyOn<any, any>(window, "getComputedStyle").mockReturnValue({
        direction: "rtl",
      });
      expect(getDefaultTextDirection(api)).toBe("rtl");
    });

    test("returns `ltr` as a fallback", () => {
      const api = {
        getQueryParam: vi.fn().mockReturnValue(undefined),
      };
      vi.spyOn<any, any>(window, "getComputedStyle").mockReturnValue({
        direction: "",
      });
      expect(getDefaultTextDirection(api)).toBe("ltr");
    });
  });

  describe(".setTextDirection", () => {
    test("sets the direction of the html tag", () => {
      setTextDirection("rtl");
      expect(document.documentElement.dir).toBe("rtl");
    });
  });
});
