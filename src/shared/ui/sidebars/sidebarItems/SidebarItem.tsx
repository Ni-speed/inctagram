import { ReactNode } from 'react'

import { Typography } from '@/shared/ui'
import { clsx } from 'clsx'

import s from './SidebarItem.module.scss'

type SidebarItemProps = {
  callback?: () => void
  children: ReactNode
  className?: string
  title: string
}
export const SidebarItem = ({ callback, children, className, title }: SidebarItemProps) => {
  const classNames = {
    container: clsx(s.container, className),
  }
  const onClickHandler = () => {
    callback && callback()
  }

  return (
    <div className={classNames.container} onClick={onClickHandler}>
      {children}
      <Typography className={s.child} variant={'mediumText14'}>
        {title}
      </Typography>
    </div>
  )
}
