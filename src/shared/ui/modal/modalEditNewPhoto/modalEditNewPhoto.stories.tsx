import { ModalEditNewPhoto } from './ModalEditNewPhoto'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: ModalEditNewPhoto,
  tags: ['autodocs'],
  title: 'Widget/ModalEditNewPhoto',
} satisfies Meta<typeof ModalEditNewPhoto>

export default meta
type Story = StoryObj<typeof meta>

export const ModalEditNewPhotoCommon: Story = {
  args: {
    handleButtonClick: () => {},
    onClose: () => {},
    open: true,
  },
}
