import { EnFlag, RuFlag } from '@/shared/assets/svg'
import { LanguageSelectItem } from '@/shared/ui/languageSelect/languageSelectItem/LanguageSelectItem'
import { Meta } from '@storybook/react'

export default {
  component: LanguageSelectItem,
  tags: ['autodocs'],
  title: 'Components/LanguageSelect',
} satisfies Meta<typeof LanguageSelectItem>

export const LanguageSelectItemEnglish = {
  args: {
    flag: EnFlag,
    language: 'en',
  },
}
export const LanguageSelectItemRussian = {
  args: {
    flag: RuFlag,
    language: 'ru',
  },
}
