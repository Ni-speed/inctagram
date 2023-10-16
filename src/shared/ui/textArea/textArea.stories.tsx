import type { Meta, StoryObj } from '@storybook/react'

import { TextArea } from './TextArea'

const meta = {
  component: TextArea,
  tags: ['autodocs'],
  title: 'Components/TextArea',
} satisfies Meta<typeof TextArea>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Default Label ',
    placeholder: 'Text-area',
  },
}

export const Active: Story = {
  args: {
    label: 'Active',
    placeholder: 'Text-area',
  },
}

export const Error: Story = {
  args: {
    errorMessage: 'Error message',
    label: 'Error',
    value: 'Wrong value',
  },
}
export const Disabled: Story = {
  args: {
    disabled: true,
    label: 'Disabled',
    placeholder: 'Text-area',
  },
}
