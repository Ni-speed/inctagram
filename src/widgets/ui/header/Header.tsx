import React, { ChangeEvent } from 'react'

import { BallNotification } from '../../../entities/user/ui'
import { DropDown, Typography } from '../../../shared/ui'
import { Button } from '../../../shared/ui/button'
import { useRouter } from 'next/router'

import s from './header.module.scss'

type HeaderPropsType = {
  countNotification: number
  isAuth: boolean
}

export const Header = ({ countNotification, isAuth }: HeaderPropsType) => {
  const router = useRouter()
  const changeLangHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    const locale = event.currentTarget.value

    router.push(router.pathname, '', { locale })
  }

  return (
    <header className={s.header}>
      <div className={s.container}>
        <div>
          <Typography variant={'large'}>Inctagram</Typography>
        </div>
        <select defaultValue={router.locale} onChange={changeLangHandler}>
          <option value={'ru'}>ru</option>
          <option value={'en'}>en</option>
        </select>
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
