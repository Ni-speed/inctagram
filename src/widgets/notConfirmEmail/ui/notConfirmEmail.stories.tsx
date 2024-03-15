import { NotConfirmEmail } from './NotConfirmEmail'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: NotConfirmEmail,
  tags: ['autodocs'],
  title: 'Widget/ConfirmEmail/NotConfirm',
} satisfies Meta<typeof NotConfirmEmail>

export default meta
type Story = StoryObj<typeof meta>

export const NotConfirm: Story = {}
