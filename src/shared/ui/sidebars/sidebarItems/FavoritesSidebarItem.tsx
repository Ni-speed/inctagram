import { FavoritesIcon } from '@/shared/assets/svg/sidebarsIcons'
import { SidebarItem } from '@/shared/ui/sidebars/sidebarItems'

type FavoritesSidebarItemProps = {
  callback?: () => void
}
export const FavoritesSidebarItem = ({ callback }: FavoritesSidebarItemProps) => {
  return (
    <SidebarItem callback={callback} title={'Favorites'}>
      <FavoritesIcon />
    </SidebarItem>
  )
}
