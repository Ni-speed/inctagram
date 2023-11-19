import { SignIn } from '@/widgets/singIn/ui/SignIn'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: SignIn,
  tags: ['autodocs'],
  title: 'Widget/SingIn',
} satisfies Meta<typeof SignIn>

export default meta
type Story = StoryObj<typeof meta>

export const SugnIpCard: Story = {}
