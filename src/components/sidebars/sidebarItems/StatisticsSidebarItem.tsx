import { StatisticsIcon } from '../../../../public/icons/index'
import { Typography } from '@/components/typography/Typography'

import s from './SidebarItem.module.scss'

export type StatisticsSidebarItemProps = {
  callback?: () => void
}
export const StatisticsSidebarItem = (props: StatisticsSidebarItemProps) => {
  return (
    <div className={s.container} onClick={props.callback}>
      <StatisticsIcon />
      <Typography variant={'mediumText14'}>Statistics</Typography>
    </div>
  )
}
