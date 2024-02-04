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
} from "@storybook/types";
import { PARAM_KEY } from "./constants";
import { addons, useStoryContext } from "@storybook/preview-api";
import { setTextDirection } from "./utils";
import { INITIALIZE_EVENT_ID, UPDATE_EVENT_ID } from "./constants";
import { useChannel, useEffect } from "@storybook/preview-api";

const withRtl = (StoryFn: PartialStoryFn<Renderer>) => {
  const channel = useChannel({
    [UPDATE_EVENT_ID]: ({ direction }) => {
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
  globals: {
    [PARAM_KEY]: false,
  },
};

export default preview;
