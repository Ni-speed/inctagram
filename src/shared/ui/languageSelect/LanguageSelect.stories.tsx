import { EnFlag, RuFlag } from '@/shared/assets/svg'
import { LanguageSelect, LanguageSelectTypes } from '@/shared/ui/languageSelect/LanguageSelect'
import { LanguageSelectItem } from '@/shared/ui/languageSelect/languageSelectItem/LanguageSelectItem'
import { Meta } from '@storybook/react'

export default {
  component: LanguageSelect,
  tags: ['autodocs'],
  title: 'Components/LanguageSelect',
} satisfies Meta<typeof LanguageSelect>

const optionsLanguageSelect = [
  {
    label: <LanguageSelectItem flag={RuFlag} language={'ru'} />,
    value: 'ru',
  },
  {
    label: <LanguageSelectItem flag={EnFlag} language={'en'} />,
    value: 'en',
  },
]

export const LanguageSelectStories = {
  args: {
    testOptions: optionsLanguageSelect,
  },

  render: ({ testOptions }: LanguageSelectTypes) => {
    return <LanguageSelect testOptions={testOptions} />
  },
}
