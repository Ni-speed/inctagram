import { CreateIcon } from '../../../../public/icons/index'
import { Typography } from '@/components/typography/Typography'

import s from './SidebarItem.module.scss'

export type CreateSidebarItemProps = {
  callback?: () => void
}
export const CreateSidebarItem = (props: CreateSidebarItemProps) => {
  return (
    <div className={s.container}>
      <CreateIcon />
      <Typography variant={'mediumText14'}>Create</Typography>
    </div>
  )
}
