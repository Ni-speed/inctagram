import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { Input, InputProps } from '@/shared/ui'

export type ControlledInputPropsType<T extends FieldValues> = UseControllerProps<T> &
  Omit<InputProps, 'onChange' | 'value'>

export const ControlledInput = <T extends FieldValues>({
  control,
  defaultValue,
  name,
  rules,
  shouldUnregister,
  ...InputProps
}: ControlledInputPropsType<T>) => {
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
        errorMessage: emailControl.fieldState.error?.message,
        onChangeValue: emailControl.field.onChange,
        value: emailControl.field.value,

        ...InputProps,
      }}
    />
  )
}