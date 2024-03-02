import { ReactElement, useState } from 'react'

import { SidebarItemsType, useSidebarItems } from '../lib/useSidebarItems'
import { ModalAddPost, Undefineable } from '@/shared'
import { CreateSidebarListsItem } from '@/widgets/sidebar/lib/createSidebarListsItem'

import s from './sidebar.module.scss'

type PropsType = {
  accountPaid: boolean
  logout: () => void
  userName: Undefineable<string>
}

export const Sidebar = ({ accountPaid, logout, userName }: PropsType) => {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const sidebarItems = useSidebarItems()
  const sidebarList: ReactElement[] = []

  const addSidebarItemInList = (key: string, sidebarItems: SidebarItemsType) => {
    return sidebarList.push(
      CreateSidebarListsItem({
        items: sidebarItems,
        key,
        onClickCreateHandler: () => {
          setIsOpenModal(true)
        },
        onClickLogoutHandler: logout,
        userName,
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
      <ModalAddPost isOpen={isOpenModal} onClose={() => setIsOpenModal(false)}></ModalAddPost>
    </aside>
  )
}
