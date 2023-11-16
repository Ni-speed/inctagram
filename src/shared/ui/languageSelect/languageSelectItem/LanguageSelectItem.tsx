import { ReactElement } from 'react'

import { useTranslation } from '@/shared/hooks'

import s from './LanguageSelectItem.module.scss'
type Props = {
  flag: ReactElement
  language: 'en' | 'ru'
}

export const LanguageSelectItem = ({ flag, language }: Props) => {
  const { t } = useTranslation()

  return (
    <div className={s.container}>
      <div className={s.flag}>{flag}</div>
      <span className={s.text}>{t.languageSelector[language]}</span>
    </div>
  )
}
