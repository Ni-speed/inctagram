import { ModalCloseCreationPost } from './ModalCloseCreationPost'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: ModalCloseCreationPost,
  tags: ['autodocs'],
  title: 'Widget/ModalCloseCreationPost',
} satisfies Meta<typeof ModalCloseCreationPost>

export default meta
type Story = StoryObj<typeof meta>

export const ModalCloseCreationPostCommon: Story = {
  args: {
    onClose: () => {},
    open: true,
  },
}
