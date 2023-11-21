import { Meta, StoryFn } from '@storybook/react'

import Community from '.'

export default {
  title: 'Community',
  component: Community,
} as Meta

const Template: StoryFn<typeof Community> = () => <Community />

export const Default = Template.bind({})