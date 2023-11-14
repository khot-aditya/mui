import { Meta, StoryFn } from '@storybook/react'

import Preview from '.'

export default {
  title: 'Preview',
  component: Preview,
} as Meta

const Template: StoryFn<typeof Preview> = () => <Preview />

export const Default = Template.bind({})