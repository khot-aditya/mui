import { Meta, StoryFn } from '@storybook/react'

import For from '.'

export default {
  title: 'For',
  component: For,
} as Meta

const Template: StoryFn<typeof For> = (args) => <For {...args} />

export const Default = Template.bind({})