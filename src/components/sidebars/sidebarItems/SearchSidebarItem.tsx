import { SearchIcon } from '../../../../public/icons/index'
import { Typography } from '@/components/typography/Typography'

import s from './SidebarItem.module.scss'

export type SearchSidebarItemProps = {
  callback?: () => void
}
export const SearchSidebarItem = (props: SearchSidebarItemProps) => {
  return (
    <div className={s.container} onClick={props.callback}>
      <SearchIcon />
      <Typography variant={'mediumText14'}>Search</Typography>
    </div>
  )
}
