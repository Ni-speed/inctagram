import { PropsWithChildren, ReactElement } from 'react'

import { Header } from '../../../header'
import { useGetMeQuery } from '@/features/auth'
import { NextPage } from 'next'

import s from './layout.module.scss'

export const Layout: NextPage<PropsWithChildren<any>> = props => {
  const { children } = props
  const { data } = useGetMeQuery()

  return (
    <main className={s.main}>
      <Header countNotification={5} isAuth={!!data}></Header>
      <div className={s.container}>{children}</div>
    </main>
  )
}
