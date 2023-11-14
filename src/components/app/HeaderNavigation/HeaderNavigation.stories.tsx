import { Meta, StoryFn } from '@storybook/react'

import HeaderNavigation from '.'

export default {
  title: 'HeaderNavigation',
  component: HeaderNavigation,
} as Meta

const Template: StoryFn<typeof HeaderNavigation> = (args) => <HeaderNavigation {...args} />

export const Default = Template.bind({})