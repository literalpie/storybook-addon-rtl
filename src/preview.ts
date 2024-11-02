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
  PartialStoryFn,
  DecoratorFunction,
} from "@storybook/types";
import { setTextDirection } from "./utils";
import { INITIALIZE_EVENT_ID, UPDATE_EVENT_ID } from "./constants";
import {
  useChannel,
  useEffect,
  useGlobals,
  useParameter,
  useState,
} from "@storybook/preview-api";

const withRtl: DecoratorFunction = (StoryFn, context) => {
  const [globals, setGlobals] = useGlobals();
  const directionParameter = useParameter("direction", "ltr");
  const [eventDirection, setEventDirection] = useState<
    "ltr" | "rtl" | undefined
  >(undefined);
  // setGlobals()
  const direction = globals["storybook-addon-rtl"];
  // setGlobals({ "storybook-addon-rtl": direction });
  console.log("withRTL direction", globals, directionParameter);
  const channel = useChannel({
    [UPDATE_EVENT_ID]: ({ direction }) => {
      setEventDirection(direction);
      // setting the direction on canvasElement is a good way to do it
      (context.canvasElement as HTMLElement).dir = direction;
      setTextDirection(direction);
    },
  });

  useEffect(() => {
    channel(INITIALIZE_EVENT_ID);
  }, [channel]);

  return StoryFn();
};

const preview: ProjectAnnotations<Renderer> = {
  decorators: [withRtl],
};

export default preview;
