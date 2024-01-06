import { ModalAddPost } from './ModalAddPost'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: ModalAddPost,
  tags: ['autodocs'],
  title: 'Widget/ModalAddPost',
} satisfies Meta<typeof ModalAddPost>

export default meta
type Story = StoryObj<typeof meta>

export const ModalAddPostCommon: Story = {
  args: {
    isOpen: true,
    text: 'You can write anything you want.',
  },
}
