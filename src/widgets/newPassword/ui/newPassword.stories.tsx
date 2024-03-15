import { NewPassword } from './NewPassword'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: NewPassword,
  tags: ['autodocs'],
  title: 'Widget/NewPassword',
} satisfies Meta<typeof NewPassword>

export default meta
type Story = StoryObj<typeof meta>

export const NewPasswordCard: Story = {}
