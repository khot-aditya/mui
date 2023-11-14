import { Meta, StoryFn } from '@storybook/react'

import CodeEditor from '.'

export default {
  title: 'CodeEditor',
  component: CodeEditor,
} as Meta

const Template: StoryFn<typeof CodeEditor> = () => <CodeEditor />

export const Default = Template.bind({})