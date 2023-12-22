import { Sidebar } from './Sidebar'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: Sidebar,
  tags: ['autodocs'],
  title: 'Widget/Sidebar',
} satisfies Meta<typeof Sidebar>

export default meta
type Story = StoryObj<typeof meta>

export const SidebarWidget: Story = {
  args: {
    accountPaid: true,
    id: '1234',
    logout: () => console.log(''),
  },
}
