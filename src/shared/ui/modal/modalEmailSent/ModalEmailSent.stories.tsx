import { ModalEmailSent } from './ModalEmailSent'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: ModalEmailSent,
  tags: ['autodocs'],
  title: 'Widget/ModalEmailSent',
} satisfies Meta<typeof ModalEmailSent>

export default meta
type Story = StoryObj<typeof meta>

export const ModalEmailSentCommon: Story = {
  args: {
    isOpen: true,
    text: 'You can write anything you want.',
  },
}
