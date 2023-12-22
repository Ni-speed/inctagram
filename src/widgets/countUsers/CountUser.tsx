import { Typography } from '@/shared'

import s from './countUsers.module.scss'

export const CountUser = ({}) => {
  const numbers = ['0', '0', '1', '6', '9', '5']

  return (
    <div className={s.wrapper}>
      <div className={s.content}>
        <div className={s.text}>
          <Typography variant={'h2'}>Registered users:</Typography>
        </div>
        <div className={s.count}>
          {numbers.map((n, index) => {
            return (
              <div className={s.number} key={index}>
                <Typography variant={'h2'}>{n}</Typography>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
