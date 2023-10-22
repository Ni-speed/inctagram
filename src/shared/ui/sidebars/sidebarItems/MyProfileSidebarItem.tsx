import { MyProfileIcon } from '@/shared/assets/svg/sidebarsIcons'
import { SidebarItem } from '@/shared/ui/sidebars/sidebarItems'

type MyProfileSidebarItemProps = {
  callback?: () => void
}
export const MyProfileSidebarItem = ({ callback }: MyProfileSidebarItemProps) => {
  return (
    <SidebarItem callback={callback} title={'My Profile'}>
      <MyProfileIcon />
    </SidebarItem>
  )
}
