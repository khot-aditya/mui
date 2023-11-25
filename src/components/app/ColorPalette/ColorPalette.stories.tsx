import { Meta, StoryFn } from '@storybook/react'

import ColorPalette from '.'

export default {
  title: 'ColorPalette',
  component: ColorPalette,
} as Meta

const Template: StoryFn<typeof ColorPalette> = (args) => <ColorPalette {...args}/>

export const Default = Template.bind({})