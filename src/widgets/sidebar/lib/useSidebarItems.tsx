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
      title: <Typography variant={'mediumText14'}>{t.sidebar.home}</Typography>,
      url: '/home',
    },
    // eslint-disable-next-line perfectionist/sort-objects
    create: {
      icon: <Plus className={s.icon} />,
      title: <Typography variant={'mediumText14'}> {t.sidebar.create}</Typography>,
      url: '/create',
    },
    myProfile: {
      icon: <User className={s.icon} />,
      title: <Typography variant={'mediumText14'}> {t.sidebar.myProfile}</Typography>,
      url: '/profile',
    },
    // eslint-disable-next-line perfectionist/sort-objects
    messenger: {
      icon: <Message className={s.icon} />,
      title: <Typography variant={'mediumText14'}>{t.sidebar.messenger}</Typography>,
      url: '/messenger',
    },
    search: {
      icon: <SearchSvg className={`${s.icon} ${s.search}`} />,
      title: <Typography variant={'mediumText14'}> {t.sidebar.search}</Typography>,
      url: '/search',
    },
    statistics: {
      icon: <Statistics className={s.icon} />,
      title: <Typography variant={'mediumText14'}>{t.sidebar.statistics}</Typography>,
      url: '/statistics',
    },
    // eslint-disable-next-line perfectionist/sort-objects
    favorites: {
      icon: <Favorite className={s.icon} />,
      title: <Typography variant={'mediumText14'}>{t.sidebar.favorites}</Typography>,
      url: '/favorites',
    },
    // eslint-disable-next-line perfectionist/sort-objects
    logout: {
      icon: <Logout className={s.icon} />,
      title: <Typography variant={'mediumText14'}> {t.sidebar.logOut}</Typography>,
      url: '',
    },
  }

  return sidebarItems
}
export type SidebarItemsType = ReturnType<typeof useSidebarItems>
