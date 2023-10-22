import { StatisticsIcon } from '@/shared/assets/svg/sidebarsIcons'
import { SidebarItem } from '@/shared/ui/sidebars/sidebarItems'

type StatisticsSidebarItemProps = {
  callback?: () => void
}
export const StatisticsSidebarItem = ({ callback }: StatisticsSidebarItemProps) => {
  return (
    <SidebarItem callback={callback} title={'Statistics'}>
      <StatisticsIcon />
    </SidebarItem>
  )
}
