import { Meta, StoryFn } from '@storybook/react'

import Editor from '.'

export default {
  title: 'Editor',
  component: Editor,
} as Meta

const Template: StoryFn<typeof Editor> = () => <Editor />

export const Default = Template.bind({})