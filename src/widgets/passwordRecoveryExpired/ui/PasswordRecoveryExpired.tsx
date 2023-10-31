import React from 'react'

import { ManWithClock } from '@/shared/assets/svg/manWithClock'
import { useTranslation } from '@/shared/hooks'
import { Button, Typography } from '@/shared/ui'

import s from './PasswordRecoveryExpired.module.scss'
export const PasswordRecoveryExpired = () => {
  const { t } = useTranslation()

  return (
    <div className={s.wrapper}>
      <div className={s.contentContainer}>
        <Typography variant={'h1'}>{t.titles.expiredLinkPass}</Typography>
        <Typography className={s.info} variant={'regularText16'}>
          {t.other.infoExpired}
        </Typography>
        <Button fullWidth onClick={() => alert('ты лох ты сдох')}>
          {t.linksButtons.resendLink}
        </Button>
      </div>
      <ManWithClock />
    </div>
  )
}
