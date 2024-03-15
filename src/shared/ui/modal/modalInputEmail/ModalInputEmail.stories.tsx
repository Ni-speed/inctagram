import { Meta, StoryObj } from '@storybook/react'

import { ModalInputEmail } from './ModalInputEmail'

const meta = {
  component: ModalInputEmail,
  tags: ['autodocs'],
  title: 'Widget/ModalInputEmail',
} satisfies Meta<typeof ModalInputEmail>

export default meta
type Story = StoryObj<typeof meta>

export const ModalInputEmailCommon: Story = {
  args: {
    isOpen: true,
    value: 'You can write anything you want!!!.',
  },
}
