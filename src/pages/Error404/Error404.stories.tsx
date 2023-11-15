import { Meta, StoryFn } from '@storybook/react'

import Error404 from '.'

export default {
  title: 'Error404',
  component: Error404,
} as Meta

const Template: StoryFn<typeof Error404> = () => <Error404 />

export const Default = Template.bind({})