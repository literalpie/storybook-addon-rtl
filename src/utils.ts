import { API } from "@storybook/manager-api";

export function getDefaultTextDirection(api: API) {
  const queryParam = api.getQueryParam("direction");
  const htmlDirection = window
    .getComputedStyle(document.documentElement)
    .direction.toLowerCase();
  return queryParam || api.getGlobals().addonRtl || htmlDirection || "ltr";
}
