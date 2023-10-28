import { PropsWithChildren, ReactElement } from 'react'

import { Header } from '..'
import { Navbar } from '../../../shared/ui'
import { NextPage } from 'next'

import s from './layout.module.scss'

export const Layout: NextPage<PropsWithChildren<any>> = props => {
  const { children } = props

  return (
    <main className={s.main}>
      <Header countNotification={5} isAuth></Header>
      <Navbar></Navbar>
      <div className={s.container}> {children}</div>
    </main>
  )
}
export const getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}