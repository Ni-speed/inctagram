import { LogOutIcon } from '@/shared/assets/svg/sidebarsIcons'
import { Typography } from '@/shared/ui'

import s from './SidebarItem.module.scss'

export type LogOutItemProps = {
  callback?: () => void
}
export const LogOutItem = (props: LogOutItemProps) => {
  return (
    <div className={s.container} onClick={props.callback}>
      <LogOutIcon />
      <Typography variant={'mediumText14'}>Log Out</Typography>
    </div>
  )
}
