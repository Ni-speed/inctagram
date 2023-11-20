import { PropsWithChildren, ReactElement } from 'react'

import { Header } from '../..'
import { useGetMeQuery } from '@/features/auth'
import { Providers } from '@/shared/components/Providers'
import { NextPage } from 'next'

import s from './layout.module.scss'

export const Layout: NextPage<PropsWithChildren<any>> = props => {
  const { children } = props
  const { data } = useGetMeQuery()

  return (
    <Providers>
      <main className={s.main}>
        <Header countNotification={5} isAuth></Header>
        <div className={s.container}>{children}</div>
      </main>
    </Providers>
  )
}
export const getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}
