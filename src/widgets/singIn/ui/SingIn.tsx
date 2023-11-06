import React from 'react'

import { useLoginMutation } from '@/features/auth/api/authApi'
import { loginErrors } from '@/features/auth/model/types'
import { SingInForm } from '@/features/auth/ui/singIn'
import { Github, Google } from '@/shared/assets/svg'
import { useTranslation } from '@/shared/hooks'
import { Button, Card, Typography } from '@/shared/ui'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/router'
import { signIn } from 'next-auth/react'

import s from './singIn.module.scss'

export const SingIn = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const callbackUrl = searchParams?.get('callbackUrl') || '/profile'

  const handleSignIn = (provider: string) => {
    signIn(provider, { callbackUrl })
  }

  const [login, { error, isSuccess: loginSuccess }] = useLoginMutation()
  const { t } = useTranslation()

  if (loginSuccess) {
    router.push('/')
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
