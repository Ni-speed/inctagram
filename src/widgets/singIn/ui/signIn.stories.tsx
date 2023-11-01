import { SingIn } from './SingIn'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: SingIn,
  tags: ['autodocs'],
  title: 'Widget/SingIn',
} satisfies Meta<typeof SingIn>

export default meta
type Story = StoryObj<typeof meta>

export const SugnIpCard: Story = {}
