import { ReactElement } from 'react'

import { useGetMeQuery, useLogoutMutation } from '../../../features'
import { createSidebarListsItem } from '../lib/createSidebarListsItem'
import { SidebarItemsType, useSidebarItems } from '../lib/useSidebarItems'

import s from './sidebar.module.scss'

export const Sidebar = ({}) => {
  const [logout] = useLogoutMutation()
  const {
    data: { id },
  } = useGetMeQuery()
  const sidebarItems = useSidebarItems()
  const accountPaid = true
  const sidebarList: ReactElement[] = []

  const addSidebarItemInList = (key: string, sidebarItems: SidebarItemsType) => {
    return sidebarList.push(
      createSidebarListsItem({
        classNameButton: s.button,
        classNameLink: s.item,
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
    <aside>
      <ul className={s.sidebarList}>{sidebarList}</ul>
    </aside>
  )
}
