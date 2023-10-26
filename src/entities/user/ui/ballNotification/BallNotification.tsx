import { Bell } from '../../../../shared/assets/svg/bell'

import s from './ballNotification.module.scss'

type BallNotificationProps = {
  countNotification: number
}

export const BallNotification = ({ countNotification }: BallNotificationProps) => {
  const openNotificationList = () => {
    console.log('DropDown menu open')
  }

  return (
    <div className={s.bellBlock} onClick={openNotificationList}>
      <Bell className={s.bell} />
      {!!countNotification && <div className={s.count}>{countNotification}</div>}
    </div>
  )
}
