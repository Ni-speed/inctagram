import { ComponentPropsWithoutRef, ReactNode } from 'react'

import * as LabelRadixUI from '@radix-ui/react-label'
import { clsx } from 'clsx'

import s from './Label.module.scss'

export type LabelProps = {
  label?: ReactNode
} & ComponentPropsWithoutRef<'label'>

export const Label = ({ children, className, label, ...rest }: LabelProps) => {
  const classNames = {
    label: clsx(s.label, className),
  }

  return (
    <LabelRadixUI.Root {...rest}>
      {label && <div className={classNames.label}>{label}</div>}
      {children}
    </LabelRadixUI.Root>
  )
}
