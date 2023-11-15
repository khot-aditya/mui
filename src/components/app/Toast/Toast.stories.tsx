import { Meta, StoryFn } from '@storybook/react'

import Toast from '.'

export default {
  title: 'Toast',
  component: Toast,
} as Meta

const Template: StoryFn<typeof Toast> = () => <Toast />

export const Default = Template.bind({})