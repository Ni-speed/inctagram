import { FavoritesIcon } from '@/shared/assets/svg/sidebarsIcons'
import { Typography } from '@/shared/ui'

import s from './SidebarItem.module.scss'

export type FavoritesSidebarItemProps = {
  callback?: () => void
}
export const FavoritesSidebarItem = (props: FavoritesSidebarItemProps) => {
  return (
    <div className={s.container} onClick={props.callback}>
      <FavoritesIcon />
      <Typography variant={'mediumText14'}>Favorites</Typography>
    </div>
  )
}
