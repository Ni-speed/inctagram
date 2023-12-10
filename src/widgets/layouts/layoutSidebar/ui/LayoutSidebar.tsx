import { PropsWithChildren, useEffect } from 'react'

import { useGetMeQuery, useLogoutMutation, useRefreshMutation } from '@/features/auth'
import { Sidebar } from '@/widgets/sidebar'
import { useRouter } from 'next/router'

import s from './layoutSidebar.module.scss'

export const LayoutSidebar = (props: PropsWithChildren<any>) => {
  const { children } = props
  const { data, isError, isLoading } = useGetMeQuery()
  const [logout] = useLogoutMutation()
  const router = useRouter()

  if (isLoading) {
    return <div>Loading...</div>
  }
  if (isError) {
    router.push('/signIn')
  }

  return (
    <div className={s.container}>
      <Sidebar accountPaid id={data?.id} logout={logout} />
      <div className={s.content}>{children}</div>
    </div>
  )
}
