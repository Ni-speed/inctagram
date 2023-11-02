import { PropsWithChildren, ReactElement } from 'react'

import { Header } from '../..'
// import { Navbar } from '../../../shared/ui'
import { Providers } from '@/shared/components/Providers'
// import { Header } from '..'
import { Navbar } from '@/shared/ui'
import { NextPage } from 'next'

import s from './layout.module.scss'

export const Layout: NextPage<PropsWithChildren<any>> = props => {
  const { children } = props

  return (
    <Providers>
      <main className={s.main}>
        <Header countNotification={5} isAuth></Header>

        <div className={s.container}>
          <Navbar></Navbar>
          {children}
        </div>
      </main>
    </Providers>
  )
}
export const getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}
