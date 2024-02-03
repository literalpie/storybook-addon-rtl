module.exports = {
  stories: [
    './stories.js'
  ],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-webpack5-compiler-babel',
    '../register'
  ],
  features: {
    storyStoreV7: true
  },
  framework: '@storybook/react-webpack5',
  core: {
    builder: '@storybook/builder-webpack5'
  }
}
