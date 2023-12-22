import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { TextArea, TextFieldProps } from '@/shared/ui'

export type ControlledTextAreaProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<TextFieldProps, 'onChange' | 'value'>

export const ControlledTextArea = <T extends FieldValues>({
  control,
  defaultValue,
  name,
  rules,
  shouldUnregister,
  ...TextFieldProps
}: ControlledTextAreaProps<T>) => {
  const textAreaControl = useController({
    control,
    defaultValue,
    name,
    rules,
    shouldUnregister,
  })

  return (
    <TextArea
      {...{
        onBlur: textAreaControl.field.onBlur,
        onChangeValue: textAreaControl.field.onChange,
        value: textAreaControl.field.value,
        ...TextFieldProps,
      }}
    />
  )
}
