import { ReactElement, useState } from 'react'

import { CreateSidebarListsItem } from '../lib/CreateSidebarListsItem'
import { SidebarItemsType, useSidebarItems } from '../lib/useSidebarItems'
import { ModalAddPost, Undefineable } from '@/shared'

import s from './sidebar.module.scss'

type PropsType = {
  accountPaid: boolean
  id: Undefineable<string>
  logout: () => void
}

export const Sidebar = ({ accountPaid, id, logout }: PropsType) => {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const sidebarItems = useSidebarItems()
  const sidebarList: ReactElement[] = []

  const addSidebarItemInList = (key: string, sidebarItems: SidebarItemsType) => {
    return sidebarList.push(
      CreateSidebarListsItem({
        id,
        items: sidebarItems,
        key,
        onClickCreateHandler: () => {
          setIsOpenModal(true)
        },
        onClickLogoutHandler: logout,
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
