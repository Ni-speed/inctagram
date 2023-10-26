import { Header } from './Header'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: Header,
  tags: ['autodocs'],
  title: 'Components/Header',
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const HeaderWithAuthUser: Story = {
  args: {
    countNotification: 5,
    isAuth: true,
    // value: 'General information',
  },
}
export const HeaderWithoutNotification: Story = {
  args: {
    countNotification: 0,
    isAuth: true,
    // value: 'General information',
  },
}
export const HeaderWithNotAuthUser: Story = {
  args: {
    countNotification: 0,
    isAuth: false,
    // value: 'General information',
  },
}
