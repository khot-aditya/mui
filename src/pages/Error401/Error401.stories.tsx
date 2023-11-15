import { Meta, StoryFn } from '@storybook/react'

import Error401 from '.'

export default {
  title: 'Error401',
  component: Error401,
} as Meta

const Template: StoryFn<typeof Error401> = () => <Error401 />

export const Default = Template.bind({})