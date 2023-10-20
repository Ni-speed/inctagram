import { CreateIcon } from '@/shared/assets/svg/sidebarsIcons'
import { SidebarItem } from '@/shared/ui/sidebars/sidebarItems/SidebarItem'

export type CreateSidebarItemProps = {
  callback?: () => void
}
export const CreateSidebarItem = ({ callback }: CreateSidebarItemProps) => {
  return (
    <SidebarItem callback={callback} title={'Create'}>
      <CreateIcon />
    </SidebarItem>
  )
}
