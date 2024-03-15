import { Meta, StoryObj } from '@storybook/react'

import { Header } from './Header'

const meta = {
  component: Header,
  tags: ['autodocs'],
  title: 'Widget/Header',
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const HeaderWithAuthUser: Story = {
  args: {
    username: '1',
  },
}
export const HeaderWithoutNotification: Story = {
  args: {
    username: '2',
  },
}
export const HeaderWithNotAuthUser: Story = {
  args: {
    username: '3',
  },
}
