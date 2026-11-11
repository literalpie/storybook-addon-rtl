# Storybook Addon RTL [![Version](https://img.shields.io/npm/v/storybook-addon-rtl.svg)](https://www.npmjs.com/package/storybook-addon-rtl)

Storybook Addon RTL allows you to switch to right-to-left flow in your stories in [Storybook](https://storybook.js.org).

[Demo](https://literalpie.github.io/storybook-addon-rtl/)

This addon has been tested with Storybook for React, Vue and Angular. It should also work in other frameworks.

![Storybook Addon RTL Demo](docs/demo.gif)

> This is a permanent fork of [unindented/storybook-addon-rtl](https://github.com/unindented/storybook-addon-rtl), which is now archived. Thanks for `unindented` for the original code!

## Getting Started

```sh
npm i --save-dev storybook-addon-rtl
```

Add the addon to the addons array in `.storybook/main.js`

```ts
import { defineMain } from "@storybook/react-vite/node";

export default defineMain({
  /// other storybook configuration
  addons: [
    // other addons here
    "storybook-addon-rtl",
  ],
});
```

If you are using CSF 4, add the addon to your preview definition:
```ts
import { definePreview } from "@storybook/react-vite"; // Replace import with the framework you use
import addonRtl from "storybook-addon-rtl";

export default definePreview({
  addons: [addonRtl()],
});
```

Then write your stories normally:

```js
import MyComponent from './MyComponent';
import preview from '#.storybook/preview';

const meta = preview.meta({
  title: 'My Component',
  component: MyComponent
});
export default meta;

export const default = meta.story({});

export const rtlParameter = meta.story({
  // Optionally include direction as story parameter
  // Note: usually, globals should not be set at the story level because this disables the toolbar toggle button.
  globals: {
    addonRtl: 'rtl'
  },
})
```

## Advanced

### Query Params

You can set the direction using query params in the URL. This is useful for things like e2e tests.

Just add `&globals=addonRtl:rtl` or `&globals=addonRtl:ltr` to the end of the URL:

`storybook.example.com/?path=/story/button--standard&globals=addonRtl:rtl`

### Globals API

This addon uses the [Storybook Globals API](https://storybook.js.org/docs/essentials/toolbars-and-globals) to set the direction. This allows anyone to write custom code that can set or react to changes in the direction. This is especially useful when working with some libraries that need to know about the current direction. See [./src/stories/CustomDecorator.stories.tsx](./src/stories/CustomDecorator.stories.tsx) for an example.

## Meta

- Code: `git clone https://github.com/literalpie/storybook-addon-rtl.git`
- Home: <https://github.com/literalpie/storybook-addon-rtl/>

## Contributors

- Benjamin Kindle ([benjaminkindle@yahoo.com](mailto:benjaminkindle@yahoo.com))

## License

Copyright (c) 2026 Benjamin Kindle (@literalpie). This is free software, and may be redistributed under the terms specified in the LICENSE file.
