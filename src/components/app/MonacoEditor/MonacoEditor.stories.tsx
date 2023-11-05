import { Meta, StoryFn } from '@storybook/react'

import MonacoEditor from '.'

export default {
  title: 'MonacoEditor',
  component: MonacoEditor,
} as Meta

const Template: StoryFn<typeof MonacoEditor> = (args) => <MonacoEditor {...args} />

export const Default = Template.bind({})