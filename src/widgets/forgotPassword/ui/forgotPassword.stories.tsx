import { Meta, StoryObj } from '@storybook/react'

import { ForgotPassword } from './ForgotPassword'

const meta = {
  component: ForgotPassword,
  tags: ['autodocs'],
  title: 'Widget/ForgotPassword',
} satisfies Meta<typeof ForgotPassword>

export default meta
type Story = StoryObj<typeof meta>

export const ForgotPasswordCommon: Story = {
  args: {
    isSent: true,
  },
}
export const ForgotPasswordSent: Story = {
  args: {
    isSent: false,
  },
}
