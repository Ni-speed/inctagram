import React from 'react'

import { useGetMeQuery } from '../../../features'
import { BallNotification } from '@/entities/user/ui'
import { useTranslation } from '@/shared/hooks'
import { Button, DropDown, LanguageSelect, Typography } from '@/shared/ui'
import { useRouter } from 'next/router'

import s from './header.module.scss'

type HeaderProp = {
  username: string | undefined
}

export const Header = ({ username }: HeaderProp) => {
  const { t } = useTranslation()
  const router = useRouter()

  return (
    <header className={s.header}>
      <div className={s.container}>
        <div>
          <Typography variant={'large'}>Inctagram</Typography>
        </div>
        <div className={s.blockButton}>
          {!!username && (
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
                  <BallNotification countNotification={5}></BallNotification>
                </div>
              }
            ></DropDown>
          )}
          <LanguageSelect />
          {!!username || (
            <>
              <Button
                className={s.middleButton}
                onClick={() => router.push('/signIn')}
                variant={'text'}
              >
                <Typography variant={'h3'}>{t.linksButtons.signIn}</Typography>
              </Button>
              <Button onClick={() => router.push('/signUp')} variant={'primary'}>
                <Typography variant={'h3'}>{t.linksButtons.signUp}</Typography>
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  )
}
