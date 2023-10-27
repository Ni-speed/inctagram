import { Bell } from '../../../../shared/assets/svg/bell'

import s from './ballNotification.module.scss'

type BallNotificationProps = {
  className?: string
  countNotification: number
}

export const BallNotification = ({ className, countNotification }: BallNotificationProps) => {
  return (
    <div className={`${s.bellBlock} ${className}`}>
      <Bell className={s.bell} />
      {!!countNotification && <div className={s.count}>{countNotification}</div>}
    </div>
  )
}
