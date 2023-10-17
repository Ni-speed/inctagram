import { MyProfileIcon } from '@/shared/assets/svg/sidebarsIcons'
import { Typography } from '@/shared/ui'

import s from './SidebarItem.module.scss'

export type MyProfileSidebarItemProps = {
  callback?: () => void
}
export const MyProfileSidebarItem = (props: MyProfileSidebarItemProps) => {
  return (
    <div className={s.container} onClick={props.callback}>
      <MyProfileIcon />
      <Typography variant={'mediumText14'}>My Profile</Typography>
    </div>
  )
}