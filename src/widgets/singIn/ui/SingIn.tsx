import React from 'react'

import { useLoginMutation } from '@/features/auth/api/authApi'
import { SingInForm } from '@/features/auth/ui/singIn'
import { Github, Google } from '@/shared/assets/svg'
import { useTranslation } from '@/shared/hooks'
import { Button, Card, Typography } from '@/shared/ui'
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

  const [login] = useLoginMutation()
  const { t } = useTranslation()
  const onSubmitHandler = (props: { email: string; password: string }) => {
    console.log('email', typeof props.email)
    console.log('password', typeof props.email)
    login({ loginOrEmail: props.email, password: props.password })
  }
  const errorMessage = 'Unauthorized (If the password or login is wrong)'

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
