import { SearchIcon } from '@/shared/assets/svg/sidebarsIcons'
import { SidebarItem } from '@/shared/ui/sidebars/sidebarItems'

type SearchSidebarItemProps = {
  callback?: () => void
}
export const SearchSidebarItem = ({ callback }: SearchSidebarItemProps) => {
  return (
    <SidebarItem callback={callback} title={'Search'}>
      <SearchIcon />
    </SidebarItem>
  )
}
