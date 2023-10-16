import { LogOutIcon } from '../../../../public/icons/index'
import { Typography } from '@/components/typography/Typography'

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
