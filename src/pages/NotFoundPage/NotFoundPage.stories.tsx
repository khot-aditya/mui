import { Meta, StoryFn } from '@storybook/react'

import NotFoundPage from '.'

export default {
  title: 'NotFoundPage',
  component: NotFoundPage,
} as Meta

const Template: StoryFn<typeof NotFoundPage> = () => <NotFoundPage />

export const Default = Template.bind({})