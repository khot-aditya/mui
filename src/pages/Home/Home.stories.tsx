import { Meta, StoryFn } from '@storybook/react'

import Home from '.'

export default {
  title: 'Home',
  component: Home,
} as Meta

const Template: StoryFn<typeof Home> = () => <Home />

export const Default = Template.bind({})