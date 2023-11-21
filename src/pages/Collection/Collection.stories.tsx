import { Meta, StoryFn } from '@storybook/react'

import Collection from '.'

export default {
  title: 'Collection',
  component: Collection,
} as Meta

const Template: StoryFn<typeof Collection> = () => <Collection />

export const Default = Template.bind({})