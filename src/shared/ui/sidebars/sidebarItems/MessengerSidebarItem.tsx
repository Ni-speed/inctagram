import { MessengerIcon } from '@/shared/assets/svg/sidebarsIcons'
import { Typography } from '@/shared/ui'

import s from './SidebarItem.module.scss'

export type MessengerSidebarItemProps = {
  callback?: () => void
}
export const MessengerSidebarItem = (props: MessengerSidebarItemProps) => {
  return (
    <div className={s.container} onClick={props.callback}>
      <MessengerIcon />
      <Typography variant={'mediumText14'}>Messenger</Typography>
    </div>
  )
}
