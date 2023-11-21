import { Meta, StoryFn } from '@storybook/react'

import Colors from '.'

export default {
  title: 'Colors',
  component: Colors,
} as Meta

const Template: StoryFn<typeof Colors> = () => <Colors />

export const Default = Template.bind({})