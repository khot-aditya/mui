import { Meta, StoryFn } from '@storybook/react'

import HeaderOptions from '.'

export default {
  title: 'HeaderOptions',
  component: HeaderOptions,
} as Meta

const Template: StoryFn<typeof HeaderOptions> = () => <HeaderOptions />

export const Default = Template.bind({})