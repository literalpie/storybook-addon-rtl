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
} from "@storybook/types";
import { INITIALIZE_EVENT_ID } from "./constants";
import { useChannel, useEffect } from "@storybook/preview-api";
import { useGlobals } from "@storybook/preview-api";

const withRtl: DecoratorFunction = (StoryFn, context) => {
  const [globals] = useGlobals();

  (context.canvasElement as HTMLElement).dir = globals.addonRtl;

  const channel = useChannel({});

  useEffect(() => {
    // When in docs mode, useEffect seems to be caled on every change of globals.
    // We don't want to emit this event (and reset things to default values).
    // When in docs mode, we can rely fully on the globals API, and not support parameters.
    if (context.viewMode !== "docs") {
      channel(INITIALIZE_EVENT_ID);
    }
  }, [channel]);

  return StoryFn();
};

const preview: ProjectAnnotations<Renderer> = {
  initialGlobals: {
    addonRtl: "ltr",
  },
  decorators: [withRtl],
};

export default preview;
