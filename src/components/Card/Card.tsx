import { ElementRef, FC, ReactNode, forwardRef } from 'react'

import s from './Card.module.scss'

type CardProps = {
  children: ReactNode
  className?: string
}
export const Card: FC<CardProps> = forwardRef<ElementRef<'div'>, CardProps>(
  ({ children, className }, ref) => {
    return (
      <div className={`${s.cardBlock} ${className}`} ref={ref}>
        {children}
      </div>
    )
  }
)
