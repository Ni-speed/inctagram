import { Meta, StoryObj } from '@storybook/react'

import { PasswordRecoveryExpired } from './PasswordRecoveryExpired'

const meta = {
  component: PasswordRecoveryExpired,
  tags: ['autodocs'],
  title: 'Widget/PasswordRecoveryExpired',
} satisfies Meta<typeof PasswordRecoveryExpired>

export default meta
type Story = StoryObj<typeof meta>

export const PasswordRecoveryExpiredCard: Story = {}
