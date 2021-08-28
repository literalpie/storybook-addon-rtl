import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import RTLToggle from '../src/components/RTLToggle'

storiesOf('RTLToggle', module)
  .addParameters({ direction: 'rtl' })
  .add('default', () => (
    <RTLToggle onChange={action('change')} />
  ))
  .add(
    'unchecked',
    () => (<RTLToggle checked={false} onChange={action('change')} />),
    { direction: 'ltr' }
  )
  .add('checked', () => (
    <RTLToggle checked onChange={action('change')} />
  ))
