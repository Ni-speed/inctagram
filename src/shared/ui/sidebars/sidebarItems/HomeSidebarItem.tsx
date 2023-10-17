import { useState } from 'react'

import { HomeHoverIcon, HomeIcon } from '@/shared/assets/svg/sidebarsIcons'
import { Typography } from '@/shared/ui'

import s from './SidebarItem.module.scss'

export type SidebarItemProps = {
  callback?: () => void
  className?: string
}
export const HomeSidebarItem = (props: SidebarItemProps) => {
  const [isHover, setIsHover] = useState<boolean>(false)
  const onMouseEnterHandler = (value: boolean) => {
    setIsHover(value)
  }

  return (
    <div
      className={s.homeContainer}
      onMouseEnter={() => onMouseEnterHandler(true)}
      onMouseLeave={() => onMouseEnterHandler(false)}
    >
      {isHover ? <HomeHoverIcon className={s.child} /> : <HomeIcon className={s.child} />}
      <Typography className={s.child} variant={'mediumText14'}>
        Home
      </Typography>
    </div>
  )
}
