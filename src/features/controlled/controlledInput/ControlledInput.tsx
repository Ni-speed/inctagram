import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { Input, InputProps } from '@/shared/ui'

export type ControlledTextFieldPropsType<T extends FieldValues> = UseControllerProps<T> &
  Omit<InputProps, 'onChange' | 'value'>
export const ControlledInput = <T extends FieldValues>({
  control,
  defaultValue,
  name,
  rules,
  shouldUnregister,
  ...textFieldProps
}: ControlledTextFieldPropsType<T>) => {
  const emailControl = useController({
    control,
    defaultValue,
    name,
    rules,
    shouldUnregister,
  })

  return (
    <Input
      {...{
        onChangeValue: emailControl.field.onChange,
        value: emailControl.field.value,
        ...textFieldProps,
      }}
    />
  )
}
