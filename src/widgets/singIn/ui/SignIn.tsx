import React from 'react'
import { toast } from 'react-toastify'

import { useGetMeQuery, useLoginMutation } from '@/features'
import { NewErrorSignUpResponse } from '@/features/auth/model/types'
import { SingInForm } from '@/features/auth/ui/singIn'
import { Button, Card, Typography } from '@/shared'
import { Github, Google } from '@/shared/assets/svg'
import { useTranslation } from '@/shared/hooks'
import Link from 'next/link'
import { useRouter } from 'next/router'

import s from '@/widgets/singIn/ui/signIn.module.scss'

export const SignIn = () => {
  const router = useRouter()
  const { t } = useTranslation()

  const [login, { error, isLoading, isSuccess: loginSuccess }] = useLoginMutation()
  const { data: meData, isLoading: isLoadingMe, isSuccess: isSuccessGetMe } = useGetMeQuery()

  if (isSuccessGetMe) {
    router.push(`/users/profile/`)
  }

  const onSubmitHandler = (props: { email: string; password: string }) => {
    login({ email: props.email, password: props.password })
      .unwrap()
      .then(res => {
        toast.success(toast.success(t.toast.success))
        router.push('/users/profile')
      })
  }
  let loginError = undefined

  // todo fix comments
  if (error) {
    loginError = error as NewErrorSignUpResponse
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
        isQuery={isLoading}
        onSubmit={onSubmitHandler}
      />
      <div className={s.haveAcc}>
        <Typography variant={'regularText16'}>{t.other.dontHaveAcc}</Typography>
      </div>
      <div className={s.link}>
        <Link href={'/auth/signUp'}>
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
