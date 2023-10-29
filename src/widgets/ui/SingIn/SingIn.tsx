import React from 'react'

import { Github, Google } from '@/shared/assets/svg'
import { useTranslation } from '@/shared/hooks'
import { Card, Typography } from '@/shared/ui'
import Link from 'next/link'

import s from './SingIn.module.scss'

export const SingIn = () => {
  const { t } = useTranslation()

  return (
    <Card className={s.signIn}>
      <Typography variant={'h1'}>{t.linksButtons.signIn}</Typography>
      <div className={s.icons}>
        <Google />
        <Github />
      </div>
      <div>Form</div>
      <Link href={'/signIn'}>
        <Typography className={s.textLink} variant={'h3'}>
          {t.linksButtons.signIn}
        </Typography>
      </Link>
    </Card>
  )
}
