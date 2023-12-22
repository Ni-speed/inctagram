import {
  Favorite,
  Home,
  Logout,
  Message,
  Plus,
  SearchSvg,
  Statistics,
  User,
} from '../../../shared/assets/svg'
import { useTranslation } from '../../../shared/hooks'
import { Typography } from '../../../shared/ui'

import s from './../ui/sidebar.module.scss'

export const useSidebarItems = () => {
  const { t } = useTranslation()

  const sidebarItems = {
    home: {
      icon: <Home className={s.icon} />,
      title: t.sidebar.home,
      url: '/',
    },
    // eslint-disable-next-line perfectionist/sort-objects
    create: {
      icon: <Plus className={s.icon} />,
      title: t.sidebar.create,
      url: '/create',
    },
    myProfile: {
      icon: <User className={s.icon} />,
      title: t.sidebar.myProfile,
      url: '/profile',
    },
    // eslint-disable-next-line perfectionist/sort-objects
    messenger: {
      icon: <Message className={s.icon} />,
      title: t.sidebar.messenger,
      url: '/messenger',
    },
    search: {
      icon: <SearchSvg className={`${s.icon} ${s.search}`} />,
      title: t.sidebar.search,
      url: '/search',
    },
    statistics: {
      icon: <Statistics className={s.icon} />,
      title: t.sidebar.statistics,
      url: '/statistics',
    },
    // eslint-disable-next-line perfectionist/sort-objects
    favorites: {
      icon: <Favorite className={s.icon} />,
      title: t.sidebar.favorites,
      url: '/favorites',
    },
    // eslint-disable-next-line perfectionist/sort-objects
    logout: {
      icon: <Logout className={s.icon} />,
      title: t.sidebar.logOut,
      url: '',
    },
  }

  return sidebarItems
}
export type SidebarItemsType = ReturnType<typeof useSidebarItems>
