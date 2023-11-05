import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { Input, InputProps } from '@/shared/ui'

export type ControlledInputPropsType<T extends FieldValues> = UseControllerProps<T> &
  Omit<InputProps, 'onChange' | 'value'> & {
    errorMes?: string | undefined
  }

export const ControlledInput = <T extends FieldValues>({
  control,
  defaultValue,
  errorMes,
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
        errorMessage: errorMes ? errorMes : emailControl.fieldState.error?.message,
        onBlur: emailControl.field.onBlur,
        onChangeValue: emailControl.field.onChange,
        value: emailControl.field.value,
        ...InputProps,
      }}
      classNameError={!!emailControl.fieldState.error?.message}
    />
  )
}
