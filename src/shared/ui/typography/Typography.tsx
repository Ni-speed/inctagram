import { ComponentPropsWithoutRef, ElementType } from 'react'

import s from './typography.module.scss'

type TypographyProps<T extends ElementType = 'p'> = {
  as?: T
  className?: string
  variant?:
    | 'boldText14'
    | 'boldText16'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'large'
    | 'mediumText14'
    | 'regularLink'
    | 'regularText14'
    | 'regularText16'
    | 'semiBoldSmallText'
    | 'smallLink'
    | 'smallText'
} & ComponentPropsWithoutRef<T>
export const Typography = <T extends ElementType = 'p'>(props: TypographyProps<T>) => {
  const { as: Component = 'span', className, variant = 'regularText16', ...rest } = props

  return <Component className={`${s[variant]} ${className}`} {...rest}></Component>
}
