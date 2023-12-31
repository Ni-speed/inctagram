import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { CommonCheckbox } from '../..'
import { CheckboxPropsType } from '@/shared/ui/CommonCheckbox/CommonCheckbox'

type TypeControlledTextFieldProps<T extends FieldValues> = Omit<
  UseControllerProps<T>,
  'defaultValues' | 'rules'
> &
  Omit<CheckboxPropsType, 'checked' | 'onChange' | 'value'>

export const ControlledCheckbox = <T extends FieldValues>({
  control,
  name,
  shouldUnregister,
  ...rest
}: TypeControlledTextFieldProps<T>) => {
  const {
    field: { onChange, value },
  } = useController({
    control,
    name,
    shouldUnregister,
  })

  return <CommonCheckbox checked={value} onChange={onChange} {...rest}></CommonCheckbox>
}
