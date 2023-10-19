import { ReactNode } from 'react'

import { clsx } from 'clsx'

import s from './SidebarUniversal.module.scss'

type SidebarsUniversalProps = {
  children: ReactNode
  className?: string
}
export const SidebarsUniversal = ({ children, className }: SidebarsUniversalProps) => {
  const classNames = {
    container: clsx(s.sidebarBox, className),
  }

  return <div className={classNames.container}>{children}</div>
}
