import React from 'react'

import { SingInForm } from '@/features/user/auth/singIn'
import { Github, Google } from '@/shared/assets/svg'
import { useTranslation } from '@/shared/hooks'
import { Button, Card, Typography } from '@/shared/ui'
import Link from 'next/link'

import s from './SingIn.module.scss'

export const SingIn = () => {
  const { t } = useTranslation()
  const onSubmitHandler = (props: { email: string; password: string }) => {
    console.log(props)
  }
  const errorMessage = ''

  return (
    <Card className={s.signIn}>
      <Typography variant={'h1'}>{t.linksButtons.signIn}</Typography>
      <div className={s.icons}>
        <Google />
        <Github />
      </div>
      <SingInForm
        className={s.form}
        errorMessage={errorMessage && errorMessage}
        onSubmit={onSubmitHandler}
      />
      <div className={s.haveAcc}>
        <Typography variant={'regularText16'}>{t.other.dontHaveAcc}</Typography>
      </div>
      <div className={s.link}>
        <Link href={'/signUp'}>
          <Button className={s.buttonLink} variant={'text'}>
            <Typography className={s.textLink} variant={'h3'}>
              {t.linksButtons.signUp}
            </Typography>
          </Button>
        </Link>
      </div>
    </Card>
  )
}
