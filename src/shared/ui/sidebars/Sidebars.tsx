import { SidebarsUniversal } from '@/shared/ui/sidebars/SidebarsUniversal '
import {
  CreateSidebarItem,
  FavoritesSidebarItem,
  LogOutItem,
  MessengerSidebarItem,
  MyProfileSidebarItem,
  SearchSidebarItem,
  StatisticsSidebarItem,
} from '@/shared/ui/sidebars/sidebarItems'
import { HomeSidebarItem } from '@/shared/ui/sidebars/sidebarItems/HomeSidebarItem'
import Link from 'next/link'

import s from './Sidebar.module.scss'

export const Sidebars = () => {
  return (
    <div className={s.sidebarsContainer}>
      <SidebarsUniversal className={s.sidebarsControl}>
        <Link className={s.sidebarItem} href={'/'}>
          <HomeSidebarItem />
        </Link>
        <CreateSidebarItem />
        <MyProfileSidebarItem />
        <MessengerSidebarItem />
        <SearchSidebarItem />
      </SidebarsUniversal>
      <SidebarsUniversal className={s.sidebarsStatistic}>
        <StatisticsSidebarItem />
        <FavoritesSidebarItem />
      </SidebarsUniversal>
      <SidebarsUniversal className={s.sidebarsLogout}>
        <LogOutItem />
      </SidebarsUniversal>
    </div>
  )
}
