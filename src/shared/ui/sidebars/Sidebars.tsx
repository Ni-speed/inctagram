import {
  CreateIcon,
  FavoritesIcon,
  LogOutIcon,
  MessengerIcon,
  MyProfileIcon,
  SearchIcon,
  StatisticsIcon,
} from '@/shared/assets/svg/sidebarsIcons'
import { SidebarsUniversal } from '@/shared/ui/sidebars/SidebarsUniversal '
import { HomeSidebarItem } from '@/shared/ui/sidebars/sidebarItems/HomeSidebarItem'
import { SidebarItem } from '@/shared/ui/sidebars/sidebarItems/SidebarItem'
import Link from 'next/link'

import s from './Sidebar.module.scss'

export const Sidebars = () => {
  return (
    <div className={s.sidebarsContainer}>
      <SidebarsUniversal className={s.sidebarsControl}>
        <Link className={s.sidebarItem} href={'/'}>
          <HomeSidebarItem />
        </Link>
        <SidebarItem title={'Create'}>
          <CreateIcon />
        </SidebarItem>
        <SidebarItem title={'My Profile'}>
          <MyProfileIcon />
        </SidebarItem>
        <SidebarItem title={'Messenger'}>
          <MessengerIcon />
        </SidebarItem>
        <SidebarItem title={'Search'}>
          <SearchIcon />
        </SidebarItem>
      </SidebarsUniversal>
      <SidebarsUniversal className={s.sidebarsStatistic}>
        <SidebarItem title={'Statistics'}>
          <StatisticsIcon />
        </SidebarItem>
        <SidebarItem title={'Favorites'}>
          <FavoritesIcon />
        </SidebarItem>
      </SidebarsUniversal>
      <SidebarsUniversal className={s.sidebarsLogout}>
        <SidebarItem title={'Log Out'}>
          <LogOutIcon />
        </SidebarItem>
      </SidebarsUniversal>
    </div>
  )
}
