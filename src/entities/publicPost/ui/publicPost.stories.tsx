import { Meta, StoryObj } from '@storybook/react'

import { PublicPost } from './PublicPost'

const meta = {
  component: PublicPost,
  tags: ['autodocs'],
  title: 'Components/PublicPost',
} satisfies Meta<typeof PublicPost>

export default meta
type Story = StoryObj<typeof meta>

export const PublicPostItem: Story = {
  args: {
    description: 'ffffff',
    items: [{ title: 'string', url: 'string' }],
    time: 'dasdsad',
    user: { avatar: 'string', name: 'string' },
  },
}
