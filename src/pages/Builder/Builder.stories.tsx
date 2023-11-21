import { Meta, StoryFn } from '@storybook/react'

import Builder from '.'

export default {
  title: 'Builder',
  component: Builder,
} as Meta

const Template: StoryFn<typeof Builder> = () => <Builder />

export const Default = Template.bind({})