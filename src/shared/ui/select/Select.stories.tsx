import type { Meta } from '@storybook/react'

import { useState } from 'react'

import { Select, SelectProps } from '@/shared/ui/select/Select'

export default {
  component: Select,
  tags: ['autodocs'],
  title: 'Components/Select',
} satisfies Meta<typeof Select>

const optionsPrimary = [
  {
    label: 'Apple',
    value: 'Apple',
  },
  {
    label: 'Banana',
    value: 'Banana',
  },
  {
    label: 'Blueberry',
    value: 'Blueberry',
  },
  {
    label: 'Grapes',
    value: 'Grapes',
  },
]
const optionsPagination = [
  {
    label: '1',
    value: '1',
  },
  {
    label: '2',
    value: '2',
  },
  {
    label: '3',
    value: '3',
  },
  {
    label: '4',
    value: '4',
  },
  {
    label: '100',
    value: '100',
  },
]

export const Simple = {
  args: {
    options: optionsPrimary,
  },

  render: (args: SelectProps) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState('')

    return (
      <div style={{ columnGap: '20px', display: 'flex' }}>
        <Select {...args} onChange={setValue} value={value} />
      </div>
    )
  },
}

export const SimpleWithLabel = {
  args: {
    label: 'Select',
    options: optionsPrimary,
    placeholder: 'select...',
  },

  render: (args: SelectProps) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState('')

    return (
      <div>
        <Select {...args} onChange={setValue} value={value} />
      </div>
    )
  },
}

export const Pagination = {
  args: {
    label: 'pagination',
    options: optionsPagination,
    placeholder: '1',
    variant: 'pagination',
  },

  render: (args: SelectProps) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState('')

    return <Select {...args} onChange={setValue} value={value} />
  },
}

export const FullWidth = {
  args: {
    options: optionsPrimary,
    variant: 'primary',
    width: '100%',
  },

  render: (args: SelectProps) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState('')

    return <Select {...args} onChange={setValue} value={value} />
  },
}
