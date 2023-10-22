import { useState } from 'react'

import { HomeActiveIconSvg, HomeIcon } from '@/shared/assets/svg/sidebarsIcons'
import { SidebarItem } from '@/shared/ui/sidebars/sidebarItems'

import s from './SidebarItem.module.scss'

type HomeSidebarItemProps = {
  callback?: () => void
  className?: string
}
export const HomeSidebarItem = ({ callback }: HomeSidebarItemProps) => {
  const [isMouseDown, setIsMouseDown] = useState<boolean>(false)
  const onMouseEnterHandler = (value: boolean) => {
    setIsMouseDown(value)
  }

  return (
    <div
      className={s.homeContainer}
      onMouseDown={() => onMouseEnterHandler(true)}
      onMouseUp={() => onMouseEnterHandler(false)}
    >
      <SidebarItem callback={callback} className={s.homeContainer} title={'Home'}>
        {isMouseDown ? <HomeActiveIconSvg /> : <HomeIcon className={s.child} />}
      </SidebarItem>
    </div>
  )
}
