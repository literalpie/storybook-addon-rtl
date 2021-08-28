import React from 'react'
import addons from '@storybook/addons'
import { STORY_RENDERED } from '@storybook/core-events'
import RTLPanel from './containers/RTLPanel'
import { ADDON_ID, PANEL_ID, UPDATE_EVENT_ID } from './constants'

export function register () {
  addons.register(ADDON_ID, (api) => {
    const channel = addons.getChannel()
    // Whenever a story is rendered, update the state to represent the parameter value of the story.
    // We do this here and not in the panel component because we want the parameter to be respected
    // even if the panel is never opened
    channel.on(STORY_RENDERED, (_) => {
      const paramValue = api.getCurrentParameter('direction')
      if (paramValue) {
        channel.emit(UPDATE_EVENT_ID, { direction: paramValue })
      }
    })

    addons.addPanel(PANEL_ID, {
      title: 'RTL',
      render: ({ active, key }) => { /* eslint-disable-line react/prop-types, react/display-name */
        if (!active) {
          return null
        }

        return (<RTLPanel key={key} channel={channel} api={api} />)
      }
    })
  })
}
