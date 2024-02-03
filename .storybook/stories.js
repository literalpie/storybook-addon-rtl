import React from 'react'
import { action } from '@storybook/addon-actions'

import RTLToggle from '../src/components/RTLToggle'

export default {
  title: 'RTLToggle',
  component: RTLToggle,
  render: (args) => <RTLToggle onChange={action('change')} {...args} />,
}

export const basic = {}

export const unchecked = {}
export const checked = { args: { checked: true } }

export const rtlParameter = { parameters: { direction: 'rtl' } }
