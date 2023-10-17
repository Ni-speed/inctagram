import {
  CreateSidebarItem,
  FavoritesSidebarItem,
  LogOutItem,
  MessengerSidebarItem,
  MyProfileSidebarItem,
  SearchSidebarItem,
  StatisticsSidebarItem,
} from '@/components/sidebars/sidebarItems'
import { HomeSidebarItem } from '@/components/sidebars/sidebarItems/HomeSidebarItem'
import Link from 'next/link'

import s from './Sidebar.module.scss'

export const Sidebars = () => {
  return (
    <div className={s.sidebarsContainer}>
      <div className={s.sidebarsControl}>
        <Link className={s.sidebarItem} href={'/'}>
          <HomeSidebarItem />
        </Link>
        <CreateSidebarItem />
        <MyProfileSidebarItem />
        <MessengerSidebarItem />
        <SearchSidebarItem />
      </div>
      <div className={s.sidebarsStatistic}>
        <StatisticsSidebarItem />
        <FavoritesSidebarItem />
      </div>
      <div className={s.sidebarsLogout}>
        <LogOutItem />
      </div>
    </div>
  )
}
