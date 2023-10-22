import { LogOutIcon } from '@/shared/assets/svg/sidebarsIcons'
import { SidebarItem } from '@/shared/ui/sidebars/sidebarItems'

type LogOutItemProps = {
  callback?: () => void
}
export const LogOutItem = ({ callback }: LogOutItemProps) => {
  return (
    <SidebarItem callback={callback} title={'Log Out'}>
      <LogOutIcon />
    </SidebarItem>
  )
}
