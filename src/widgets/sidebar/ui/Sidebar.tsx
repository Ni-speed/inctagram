import { ReactElement } from 'react'

import { createSidebarListsItem } from '../lib/createSidebarListsItem'
import { SidebarItemsType, useSidebarItems } from '../lib/useSidebarItems'
import { useLogoutMutation } from '@/features'
import { Undefineable } from '@/shared'

import s from './sidebar.module.scss'

type PropsType = {
  accountPaid: boolean
  id: Undefineable<string>
  logout: () => void
}

export const Sidebar = ({ accountPaid, id, logout }: PropsType) => {
  const sidebarItems = useSidebarItems()
  const sidebarList: ReactElement[] = []

  const addSidebarItemInList = (key: string, sidebarItems: SidebarItemsType) => {
    return sidebarList.push(
      createSidebarListsItem({
        id,
        items: sidebarItems,
        key,
        onClickHandler: logout,
      })
    )
  }

  for (const key in sidebarItems) {
    if (accountPaid) {
      addSidebarItemInList(key, sidebarItems)
    } else {
      if (key !== 'statistics') {
        addSidebarItemInList(key, sidebarItems)
      }
    }
  }

  return (
    <aside className={s.aside}>
      <ul className={s.sidebarList}>{sidebarList}</ul>
    </aside>
  )
}
