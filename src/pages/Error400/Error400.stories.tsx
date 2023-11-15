import { Meta, StoryFn } from '@storybook/react'

import Error400 from '.'

export default {
  title: 'Error400',
  component: Error400,
} as Meta

const Template: StoryFn<typeof Error400> = () => <Error400 />

export const Default = Template.bind({})