import { Meta, StoryObj } from '@storybook/react'

import { SignUp } from './SignUp'

const meta = {
  component: SignUp,
  tags: ['autodocs'],
  title: 'Widget/SignUp',
} satisfies Meta<typeof SignUp>

export default meta
type Story = StoryObj<typeof meta>

export const SugnUpCard: Story = {}
