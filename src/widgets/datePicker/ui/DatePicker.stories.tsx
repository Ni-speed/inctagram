import { useState } from 'react'

import { DatePicker } from '@/widgets/datePicker/ui/DatePicker'
import { Meta } from '@storybook/react'

export default {
  component: DatePicker,
  title: 'Components/Data Entry/Date Picker',
} as Meta<typeof DatePicker>

export const Default = {
  args: {
    disabled: false,
    label: 'Дата',
    placeholder: 'Выбрать дату',
  },

  render(args: any) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [startDate, setStartDate] = useState(null)

    return <DatePicker setStartDate={setStartDate} startDate={startDate} {...args} />
  },
}

export const DefaultWithErrors = {
  ...Default,
  args: {
    ...Default.args,
    error: true,
    errorMessage: 'Some error',
  },
}

export const DefaultDisabled = {
  ...Default,
  args: {
    ...Default.args,
    disabled: true,
  },
}

export const Range = {
  args: {
    placeholder: 'Выбрать период',
  },

  render(args: any) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [startDate, setStartDate] = useState<Date | null>(null)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [endDate, setEndDate] = useState<Date | null>(null)

    return (
      <DatePicker
        endDate={endDate}
        setEndDate={setEndDate}
        setStartDate={setStartDate}
        startDate={startDate}
        {...args}
      />
    )
  },
}
