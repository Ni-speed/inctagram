import { Header } from './Header'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: Header,
  tags: ['autodocs'],
  title: 'Widget/Header',
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const HeaderWithAuthUser: Story = {
  args: {
    countNotification: 5,
    isAuth: true,
  },
}
export const HeaderWithoutNotification: Story = {
  args: {
    countNotification: 0,
    isAuth: true,
  },
}
export const HeaderWithNotAuthUser: Story = {
  args: {
    countNotification: 0,
    isAuth: false,
  },
}
