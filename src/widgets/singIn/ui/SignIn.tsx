import React, { useState } from 'react'

import { useGoogleLoginQuery, useLoginMutation } from '@/features/auth/api/authApi'
import { LoginErrors } from '@/features/auth/model/types'
import { SingInForm } from '@/features/auth/ui/singIn'
import { Github, Google } from '@/shared/assets/svg'
import { useTranslation } from '@/shared/hooks'
import { Button, Card, Typography } from '@/shared/ui'
import Link from 'next/link'
import { useRouter } from 'next/router'

import s from '@/widgets/singIn/ui/signIn.module.scss'

export const SignIn = () => {
  const router = useRouter()

  const [login, { error, isSuccess: loginSuccess }] = useLoginMutation()
  const { t } = useTranslation()

  if (loginSuccess) {
    router.push('/profile')
  }

  const onSubmitHandler = (props: { email: string; password: string }) => {
    login({ loginOrEmail: props.email, password: props.password })
  }
  let loginError = undefined

  if (error) {
    loginError = error as LoginErrors
  }

  const locationGoogle = () =>
    window.location.assign('https://inctagram-tau.vercel.app/api/v1/auth/google/login')

  const locationGithub = () =>
    window.location.assign('https://inctagram-tau.vercel.app/api/v1/auth/github/login')

  return (
    <Card className={s.signIn}>
      <Typography variant={'h1'}>{t.linksButtons.signIn}</Typography>
      <div className={s.icons}>
        <Button onClick={locationGoogle} variant={'text'}>
          <Google />
        </Button>
        <Button onClick={locationGithub} variant={'text'}>
          <Github />
        </Button>
      </div>
      <SingInForm
        className={s.form}
        errorMessage={loginError && loginError}
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
