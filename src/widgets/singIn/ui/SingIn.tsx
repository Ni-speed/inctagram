import React from 'react'

import { useGetMeQuery, useLoginMutation } from '@/features/auth/api/authApi'
import { loginErrors } from '@/features/auth/model/types'
import { SingInForm } from '@/features/auth/ui/singIn'
import { Github, Google } from '@/shared/assets/svg'
import { useTranslation } from '@/shared/hooks'
import { Button, Card, Typography } from '@/shared/ui'
import { router } from 'next/client'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { signIn } from 'next-auth/react'

import s from './singIn.module.scss'

export const SingIn = () => {
  const searchParams = useSearchParams()
  const callbackUrl = searchParams?.get('callbackUrl') || '/profile'

  const handleSignIn = (provider: string) => {
    signIn(provider, { callbackUrl })
  }

  const [login, { error, isSuccess: loginSuccess }] = useLoginMutation()
  const { data: me, isSuccess } = useGetMeQuery()
  const { t } = useTranslation()

  if (loginSuccess) {
    alert('all is good')
    /* router.replace('/')*/
  }

  if (me && isSuccess) {
    console.log('me', me)
    alert('all is good')
  }

  const onSubmitHandler = (props: { email: string; password: string }) => {
    login({ loginOrEmail: props.email, password: props.password })
  }
  let loginError = undefined

  if (error) {
    loginError = error as loginErrors
  }

  return (
    <Card className={s.signIn}>
      <Typography variant={'h1'}>{t.linksButtons.signIn}</Typography>
      <div className={s.icons}>
        <Button onClick={() => handleSignIn('google')} variant={'text'}>
          <Google />
        </Button>
        <Button onClick={() => handleSignIn('github')} variant={'text'}>
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
