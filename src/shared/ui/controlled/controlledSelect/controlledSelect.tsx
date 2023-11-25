import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { Select, SelectProps } from '@/shared'

export type ControlledSelectProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<SelectProps, 'onChange' | 'value'>

export const ControlledSelect = <T extends FieldValues>({
  control,
  defaultValue,
  name,
  rules,
  shouldUnregister,
  ...SelectProps
}: ControlledSelectProps<T>) => {
  const selectControl = useController({
    control,
    defaultValue,
    name,
    rules,
    shouldUnregister,
  })

  return (
    <Select
      {...{
        ...selectControl,
        ...SelectProps,
        onBlur: selectControl.field.onBlur,
        onChange: selectControl.field.onChange,
        value: selectControl.field.value,
      }}
    />
  )
}
