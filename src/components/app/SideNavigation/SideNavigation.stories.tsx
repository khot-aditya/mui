import { Meta, StoryFn } from '@storybook/react'

import SideNavigation from '.'

export default {
  title: 'Preview',
  component: SideNavigation,
} as Meta

const Template: StoryFn<typeof SideNavigation> = (args) => <SideNavigation {...args} />

export const Default = Template.bind({})