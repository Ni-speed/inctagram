import type { Meta, StoryObj } from '@storybook/react'

import { Loader } from './index'

const meta = {
  component: Loader,
  tags: ['autodocs'],
  title: 'UI Components/Loader',
} satisfies Meta<typeof Loader>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
