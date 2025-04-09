/**
 * A decorator is a way to wrap a story in extra “rendering” functionality. Many addons define decorators
 * in order to augment stories:
 * - with extra rendering
 * - gather details about how a story is rendered
 *
 * When writing stories, decorators are typically used to wrap stories with extra markup or context mocking.
 *
 * https://storybook.js.org/docs/react/writing-stories/decorators
 */
import type {
  Renderer,
  ProjectAnnotations,
  DecoratorFunction,
} from "storybook/internal/types";
import { useGlobals } from "storybook/preview-api";

const withRtl: DecoratorFunction = (StoryFn, context) => {
  const [globals] = useGlobals();

  (context.canvasElement as HTMLElement).dir = globals.addonRtl;

  return StoryFn();
};

const preview: ProjectAnnotations<Renderer> = {
  initialGlobals: {
    addonRtl: "ltr",
  },
  decorators: [withRtl],
};

export default preview;
