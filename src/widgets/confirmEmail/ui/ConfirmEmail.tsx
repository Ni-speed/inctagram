import { ImageConfirmEmail } from '@/shared/assets/svg'
import { useTranslation } from '@/shared/hooks'
import { Button, Typography } from '@/shared/ui'
import Link from 'next/link'

import s from './confirmEmail.module.scss'

export const ConfirmEmail = () => {
  const { t } = useTranslation()

  return (
    <div className={s.wrapper}>
      <Typography className={s.title} variant={'h1'}>
        {t.confirmEmail.title}
      </Typography>
      <Typography className={s.subTitle} variant={'regularText16'}>
        {t.confirmEmail.subTitle}
      </Typography>
      <Button className={s.button}>
        <Link href={'/signIn'}>
          <Typography variant={'h3'}>{t.confirmEmail.button}</Typography>
        </Link>
      </Button>
      <ImageConfirmEmail className={s.image}></ImageConfirmEmail>
    </div>
  )
}
