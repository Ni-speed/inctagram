import { PublicPost } from './PublicPost'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: PublicPost,
  tags: ['autodocs'],
  title: 'Components/PublicPost',
} satisfies Meta<typeof PublicPost>

export default meta
type Story = StoryObj<typeof meta>

export const PublicPostItem: Story = {
  args: {},
}
