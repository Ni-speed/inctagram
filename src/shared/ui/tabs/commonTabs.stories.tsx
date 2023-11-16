import { CommonTabs } from './CommonTabs'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: CommonTabs,
  tags: ['autodocs'],
  title: 'Components/Tabs',
} satisfies Meta<typeof CommonTabs>

export default meta
type Story = StoryObj<typeof meta>

export const Tabs: Story = {
  args: {
    tabs: [
      { title: 'General information', value: 'General information' },
      { title: 'Devices', value: 'Devices' },
      { title: 'Account Management', value: 'Account Management' },
      { title: 'My payments', value: 'My payments' },
    ],
    // value: 'General information',
  },
}
export const TabsWithDisable: Story = {
  args: {
    tabs: [
      { title: 'General information', value: 'General information' },
      { disabled: true, title: 'Devices', value: 'Devices' },
      { title: 'Account Management', value: 'Account Management' },
      { title: 'My payments', value: 'My payments' },
    ],
    // value: 'General information',
  },
}
