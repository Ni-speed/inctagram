import { Meta, StoryObj } from '@storybook/react'

import { ConfirmEmail } from './ConfirmEmail'

const meta = {
  component: ConfirmEmail,
  tags: ['autodocs'],
  title: 'Widget/ConfirmEmail/Confirm',
} satisfies Meta<typeof ConfirmEmail>

export default meta
type Story = StoryObj<typeof meta>

export const NotConfirm: Story = {}
