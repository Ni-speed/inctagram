import { MessengerIcon } from '@/shared/assets/svg/sidebarsIcons'
import { SidebarItem } from '@/shared/ui/sidebars/sidebarItems'

type MessengerSidebarItemProps = {
  callback?: () => void
}
export const MessengerSidebarItem = ({ callback }: MessengerSidebarItemProps) => {
  return (
    <SidebarItem callback={callback} title={'Messenger'}>
      <MessengerIcon />
    </SidebarItem>
  )
}
