import { API } from "storybook/manager-api";
import { RTLDirection } from "./constants";

export function getDefaultTextDirection(api: API) {
  const queryParam = api.getQueryParam("direction");
  const htmlDirection = window
    .getComputedStyle(document.documentElement)
    .direction.toLowerCase();
  return queryParam || htmlDirection || "ltr";
}

export function setTextDirection(direction: RTLDirection) {
  document.documentElement.dir = direction;
}
