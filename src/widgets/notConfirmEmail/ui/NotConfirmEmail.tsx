import { ImageNotConfirmEmail } from '../../../shared/assets/svg'
import { useTranslation } from '../../../shared/hooks'
import { Button, Typography } from '../../../shared/ui'

import s from './notConfirmEmail.module.scss'

export const NotConfirmEmail = () => {
  const { t } = useTranslation()

  return (
    <div className={s.wrapper}>
      <Typography className={s.title} variant={'h1'}>
        {t.notConfirmEmail.title}
      </Typography>
      <Typography className={s.subTitle} variant={'regularText16'}>
        {t.notConfirmEmail.subTitle}
      </Typography>
      <Button
        className={s.button}
        onClick={() => {
          console.log('Click button')
        }}
      >
        <Typography variant={'h3'}>{t.notConfirmEmail.button}</Typography>
      </Button>
      <ImageNotConfirmEmail className={s.image}></ImageNotConfirmEmail>
    </div>
  )
}
