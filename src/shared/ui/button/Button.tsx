import React, { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import { clsx } from 'clsx'

import s from './Button.module.scss'

export type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  children?: ReactNode
  className?: string
  fullWidth?: boolean
  img?: string
  variant?: 'outline' | 'primary' | 'secondary' | 'text'
} & ComponentPropsWithoutRef<T>
export const Button = <T extends ElementType = 'button'>(
  props: ButtonProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>
) => {
  const { as: Component = 'button', className, fullWidth, variant = 'primary', ...rest } = props
  const classNames = {
    root: clsx(s[variant], fullWidth && s.fullWidth, className),
  }

  return <Component className={classNames.root} {...rest} />
}
