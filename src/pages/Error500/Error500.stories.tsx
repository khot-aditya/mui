import { Meta, StoryFn } from '@storybook/react'

import Error500 from '.'

export default {
  title: 'Error500',
  component: Error500,
} as Meta

const Template: StoryFn<typeof Error500> = () => <Error500 />

export const Default = Template.bind({})