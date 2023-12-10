import React from 'react'
import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { DatePicker, DatePickerProps } from '@/widgets/datePicker'

type ControlledDataPickerProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<DatePickerProps, 'setStartDate' | 'startDate'>

export const ControlledDataPicker = <T extends FieldValues>({
  control,
  name,
  rules,
  shouldUnregister,
  ...DatePickerProps
}: ControlledDataPickerProps<T>) => {
  const dataPickerControl = useController({
    control,
    name,
    rules,
    shouldUnregister,
  })

  return (
    <DatePicker
      {...{
        setStartDate: dataPickerControl.field.onChange,
        startDate: dataPickerControl.field.value,
        ...dataPickerControl,
        ...DatePickerProps,
      }}
    />
  )
}
