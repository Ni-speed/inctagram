import React from 'react'

import { RegisterForm } from '../../../features/user/auth/ui'
import { Github, Google } from '../../../shared/assets/svg'
import { useTranslation } from '../../../shared/hooks'
import { Typography } from '../../../shared/ui'
import { Card } from '../../../shared/ui/card'
import Link from 'next/link'
import { useRouter } from 'next/router'

import s from './signUp.module.scss'

export const SignUp = () => {
  const { t } = useTranslation()

  return (
    <Card className={s.signUp}>
      <Typography variant={'h1'}>{t.linksButtons.signUp}</Typography>
      <div className={s.icons}>
        <Google />
        <Github />
      </div>
      <RegisterForm
        className={s.form}
        onSubmit={props => {
          console.log(props)
        }}
      ></RegisterForm>
      <div className={s.haveAcc}>
        <Typography variant={'regularText16'}>{t.other.haveAcc}</Typography>
      </div>

      <div className={s.link}>
        <Link href={'/signIn'}>
          <Typography className={s.textLink} variant={'h3'}>
            {t.linksButtons.signIn}
          </Typography>
        </Link>
      </div>
    </Card>
  )
}
