import { ModalSignUp } from './ModalSignUp'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: ModalSignUp,
  tags: ['autodocs'],
  title: 'Widget/ModalSignUp',
} satisfies Meta<typeof ModalSignUp>

export default meta
type Story = StoryObj<typeof meta>

export const ModalSignUpCommon: Story = {
  args: {
    isOpen: true,
  },
}
