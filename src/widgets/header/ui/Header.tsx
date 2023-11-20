import React from 'react'

import { useTranslation } from '../../../shared/hooks'
import { BallNotification } from '@/entities/user/ui'
import { Button, DropDown, LanguageSelect, Typography } from '@/shared/ui'

import s from './header.module.scss'

type HeaderPropsType = {
  countNotification: number
  isAuth: boolean
}

export const Header = ({ countNotification, isAuth }: HeaderPropsType) => {
  const { t } = useTranslation()

  return (
    <header className={s.header}>
      <div className={s.container}>
        <div>
          <Typography variant={'large'}>Inctagram</Typography>
        </div>
        <div className={s.blockButton}>
          {isAuth && (
            <DropDown
              items={[
                'sdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdf',
                'sdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdf',
                'sdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdf',
                'sdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdf',
              ]}
              modal
              trigger={
                <div className={s.ball} style={{ display: 'inline-block', height: '20px' }}>
                  <BallNotification countNotification={countNotification}></BallNotification>
                </div>
              }
            ></DropDown>
          )}
          <LanguageSelect />
          {isAuth || (
            <>
              <Button className={s.middleButton} variant={'text'}>
                <Typography variant={'h3'}>{t.linksButtons.signIn}</Typography>
              </Button>
              <Button variant={'primary'}>
                <Typography variant={'h3'}>{t.linksButtons.signUp}</Typography>
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  )
}
