import ReCAPTCHA from 'react-google-recaptcha'

import { Nullable } from '@/shared/types/nullableType'

import s from './Recaptcha.module.scss'

type Props = {
  onRecaptchaChangeHandler: (token: Nullable<string>) => void
}
export const Recaptcha = ({ onRecaptchaChangeHandler }: Props) => {
  const onRecaptchaChange = (token: Nullable<string>) => {
    onRecaptchaChangeHandler(token)
  }

  return (
    <div className={s.block}>
      <ReCAPTCHA
        hl={'en-GB'}
        onChange={onRecaptchaChange}
        sitekey={`${process.env.NEXT_PUBLIC_SITE_KEY as string}`}
        size={'normal'}
        theme={'dark'}
      />
    </div>
  )
}
