import {
  CreateSidebarItem,
  FavoritesSidebarItem,
  LogOutItem,
  MessengerSidebarItem,
  MyProfileSidebarItem,
  SearchSidebarItem,
} from '@/components/sidebars/sidebarItems'
import { HomeSidebarItem } from '@/components/sidebars/sidebarItems/HomeSidebarItem'
import Link from 'next/link'

import s from './Sidebar.module.scss'

export const Sidebars = () => {
  return (
    <div className={s.sidebarContainer}>
      <Link className={s.slidebarItem} href={'/'}>
        <HomeSidebarItem />
      </Link>
      <CreateSidebarItem />
      <MyProfileSidebarItem />
      <MessengerSidebarItem />
      <SearchSidebarItem />
      <SearchSidebarItem />
      <FavoritesSidebarItem />
      <LogOutItem />
    </div>
  )
}
