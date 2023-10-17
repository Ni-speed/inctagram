import React, { ReactNode } from 'react'

import { Typography } from '../typography'
import * as Tabs from '@radix-ui/react-tabs'

import s from './commonTabs.module.scss'

export type TabsPropsType = {
  children?: ReactNode
  onValueChange?: (value: string) => void
  tabs: Array<TabsType>
  value?: string
}
type TabsType = {
  disabled?: boolean
  title: string
  value: string
}
export const CommonTabs = ({ children, onValueChange, tabs, value }: TabsPropsType) => {
  return (
    <Tabs.Root
      className={s.root}
      defaultValue={tabs[0].value}
      onValueChange={onValueChange}
      value={value}
    >
      <Tabs.List className={s.list}>
        {tabs.map(t => (
          <Tabs.Trigger className={s.trigger} disabled={t.disabled} key={t.value} value={t.value}>
            <Typography className={s.text} variant={'h3'}>
              {t.title}
            </Typography>
          </Tabs.Trigger>
        ))}
      </Tabs.List>
      {children}
    </Tabs.Root>
  )
}
