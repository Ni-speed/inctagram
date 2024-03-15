import { memo, useMemo, useState } from 'react'

import { LanguageSelectItem } from '.'
import { Option, Select } from '..'
import { EnFlag, RuFlag } from '@/shared/assets/svg'
import { useRouter } from 'next/router'

type LocalType = 'en' | 'ru'
export type LanguageSelectTypes = {
  testOptions?: any
}
export const LanguageSelect = memo(
  ({
    testOptions = [
      { label: <LanguageSelectItem flag={RuFlag} key={1} language={'ru'} />, value: 'ru' },
      { label: <LanguageSelectItem flag={EnFlag} key={2} language={'en'} />, value: 'en' },
    ],
  }: LanguageSelectTypes) => {
    const { asPath, locale, locales, pathname, push, query } = useRouter()
    const typedLocale = locale as LocalType
    const [value, setValue] = useState(typedLocale)

    const changeLangHandler = (value: string) => {
      const locale = value as LocalType

      push({ pathname, query }, asPath, { locale })
      setValue(locale)
    }

    const countries = {
      en: <LanguageSelectItem flag={EnFlag} language={'en'} />,
      ru: <LanguageSelectItem flag={RuFlag} language={'ru'} />,
    }
    const options: Option[] = useMemo(() => {
      return Array.isArray(locales)
        ? locales.map(el => ({
            label:
              el == 'ru' ? (
                <LanguageSelectItem flag={RuFlag} language={'ru'} />
              ) : (
                <LanguageSelectItem flag={EnFlag} language={'en'} />
              ),
            value: el,
          }))
        : testOptions
    }, [locales, testOptions])

    return (
      <div>
        <Select
          onChange={changeLangHandler}
          options={options}
          placeholder={locale ? countries[typedLocale] : countries.ru}
          value={countries[value]}
          variant={'language'}
        />
      </div>
    )
  }
)
