import { Meta, StoryFn } from '@storybook/react'

import ThemeCard from '.'

export default {
  title: 'ThemeCard',
  component: ThemeCard,
} as Meta

const Template: StoryFn<typeof ThemeCard> = () => <ThemeCard />

export const Default = Template.bind({})