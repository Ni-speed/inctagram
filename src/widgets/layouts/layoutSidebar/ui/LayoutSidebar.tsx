import { PropsWithChildren, useEffect } from 'react'

import { useGetMeQuery, useLogoutMutation } from '@/features/auth'
import { Sidebar } from '@/widgets/sidebar'
import { useRouter } from 'next/router'

import s from './layoutSidebar.module.scss'

export const LayoutSidebar = (props: PropsWithChildren<any>) => {
  const { children } = props
  const { data, isLoading } = useGetMeQuery()
  const [logout] = useLogoutMutation()
  const router = useRouter()

  useEffect(() => {
    if (!isLoading) {
      if (!data) {
        router.push('/signIn')
      }
    }
  }, [data, isLoading, router])

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div className={s.container}>
      <Sidebar accountPaid id={data?.id} logout={logout} />
      <div className={s.content}>{children}</div>
    </div>
  )
}
