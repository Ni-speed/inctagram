import React from 'react'

import { ManWithClock } from '@/shared/assets/svg/manWithClock'
import { useTranslation } from '@/shared/hooks'
import { Button, Typography } from '@/shared/ui'

import s from './PasswordRecoveryExpired.module.scss'

type Props = {
  onSubmitHandler: () => void
}
export const PasswordRecoveryExpired = ({ onSubmitHandler }: Props) => {
  const { t } = useTranslation()

  return (
    <div className={s.wrapper}>
      <div className={s.contentContainer}>
        <Typography variant={'h1'}>{t.titles.expiredLinkPass}</Typography>
        <Typography className={s.info} variant={'regularText16'}>
          {t.other.infoExpired}
        </Typography>
        <Button fullWidth onClick={onSubmitHandler}>
          {t.linksButtons.resendLink}
        </Button>
      </div>
      <ManWithClock />
    </div>
  )
}
