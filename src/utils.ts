export function getDefaultTextDirection(api: any) {
  const queryParam = api.getQueryParam("direction");
  const htmlDirection = window
    .getComputedStyle(document.documentElement)
    .direction.toLowerCase();
  return queryParam || htmlDirection || "ltr";
}

export function setTextDirection(direction: any) {
  console.log("set", direction);
  document.documentElement.dir = direction;
}
