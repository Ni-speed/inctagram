import { CommonCheckbox } from './CommonCheckbox'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: CommonCheckbox,
  tags: ['autodocs'],
  title: 'Components/Checkbox',
} satisfies Meta<typeof CommonCheckbox>

export default meta
type Story = StoryObj<typeof meta>

export const Checked: Story = {
  args: {
    checked: true,
    label: 'Checked',
  },
}

export const Unchecked: Story = {
  args: {
    checked: false,
    label: 'Unhecked',
  },
}
export const Disabled: Story = {
  args: {
    checked: false,
    disabled: true,
    label: 'Disabled',
  },
}
