export const getElementDirection = (element: HTMLElement) => {
  return (element.computedStyleMap().get("direction") as CSSKeywordValue).value;
};
