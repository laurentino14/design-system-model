import {Ok} from '@lvdev/react'
import {ComponentStory, Meta} from '@storybook/react'

export default {
  title: 'Forms/Button',
  component: Ok,
  args: {
    children: 'Button',
  },
} as Meta

const Template: ComponentStory<typeof Ok> = args => <Ok {...args} />

export const Primary = Template.bind({})

Primary.args = {}
