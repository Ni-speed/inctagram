import React from 'react'

import { BallNotification } from '../../../entities/user/ui'
import { Typography } from '../../../shared/ui'
import { Button } from '../../../shared/ui/button'

import s from './header.module.scss'

type HeaderPropsType = {
  countNotification: number
  isAuth: boolean
}

export const Header = ({ countNotification, isAuth }: HeaderPropsType) => {
  return (
    <header className={s.header}>
      <div className={s.container}>
        <div>
          <Typography variant={'large'}>Inctagram</Typography>
        </div>
        <div className={s.blockButton}>
          {isAuth && <BallNotification countNotification={countNotification}></BallNotification>}
          <div className={s.select}>Select</div>
          {isAuth || (
            <>
              <Button className={s.middleButton} variant={'text'}>
                <Typography variant={'h3'}>Log in</Typography>
              </Button>
              <Button variant={'primary'}>
                <Typography variant={'h3'}>Sign up</Typography>
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  )
}
