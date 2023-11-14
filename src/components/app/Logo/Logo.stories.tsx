import { Meta, StoryFn } from '@storybook/react'

import Logo from '.'

export default {
  title: 'Logo',
  component: Logo,
} as Meta

const Template: StoryFn<typeof Logo> = (args) => <Logo {...args} />

export const Default = Template.bind({})