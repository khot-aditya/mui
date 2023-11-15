import { Meta, StoryFn } from '@storybook/react'

import Error403 from '.'

export default {
  title: 'Error403',
  component: Error403,
} as Meta

const Template: StoryFn<typeof Error403> = () => <Error403 />

export const Default = Template.bind({})