import { PropsWithChildren, useEffect } from 'react'

import { useGetMeQuery, useLogoutMutation } from '@/features'
import { SettingsButtonBar } from '@/shared/ui/settingsButtonBar/SettingsButtonBar'
import { useRouter } from 'next/router'

import s from './LayoutProfileSettings.module.scss'

export const LayoutProfileSettings = (props: PropsWithChildren<any>) => {
  const { children } = props
  const { data, isLoading } = useGetMeQuery()
  const [logout] = useLogoutMutation()
  const router = useRouter()

  useEffect(() => {
    if (!isLoading) {
      if (!data) {
        router.push('/auth/signIn')
      }
    }
  }, [data, isLoading, router])

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div className={s.container}>
      <SettingsButtonBar />
      <div className={s.content}>{children}</div>
    </div>
  )
}
