import React, { ReactNode } from 'react'

import { CheckboxChecked, CheckboxCheckedDisabled } from '@/shared'
import * as CheckboxRadix from '@radix-ui/react-checkbox'

import s from './CommonCheckbox.module.scss'

export type CheckboxPropsType = {
  checked: boolean
  className?: string
  disabled?: boolean
  label?: ReactNode
  onChange: (isChecked: boolean) => void
  required?: boolean
}

export const CommonCheckbox: React.FC<CheckboxPropsType> = ({
  checked,
  className,
  disabled,
  label,
  onChange,
  required,
}) => {
  const style = disabled ? `${s.buttonWrapper} ${s.disabled}` : s.buttonWrapper

  return (
    <div className={`${s.wrapperCheckbox} ${className}`}>
      <div className={style}>
        <CheckboxRadix.Root
          checked={checked}
          className={s.checkboxRoot}
          disabled={disabled}
          id={'c1'}
          onCheckedChange={onChange}
          required={required}
        >
          <CheckboxRadix.Indicator asChild className={s.checkboxIndicator}>
            {!disabled ? <CheckboxChecked /> : <CheckboxCheckedDisabled />}
          </CheckboxRadix.Indicator>
        </CheckboxRadix.Root>
      </div>
      {label && (
        <label className={s.label} htmlFor={'c1'}>
          {label}
        </label>
      )}
    </div>
  )
}
