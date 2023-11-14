import { Meta, StoryFn } from '@storybook/react'

import Logo from '.'

export default {
  title: 'Logo',
  component: Logo,
} as Meta

const Template: StoryFn<typeof Logo> = () => <Logo />

export const Default = Template.bind({})