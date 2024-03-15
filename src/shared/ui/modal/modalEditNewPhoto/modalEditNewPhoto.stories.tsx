import { Meta, StoryObj } from '@storybook/react'

import { ModalEditNewPhoto } from './ModalEditNewPhoto'

const meta = {
  component: ModalEditNewPhoto,
  tags: ['autodocs'],
  title: 'Widget/ModalEditNewPhoto',
} satisfies Meta<typeof ModalEditNewPhoto>

export default meta
type Story = StoryObj<typeof meta>

export const ModalEditNewPhotoCommon: Story = {
  args: {
    // handleButtonClick: () => {},
    onClose: () => {},
    open: true,
  },
}
