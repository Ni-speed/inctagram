import { ChangeEvent, PropsWithChildren, ReactElement, ReactNode } from 'react'

import { Header } from '..'
import { Navbar } from '../../../shared/ui'
import { NextPage } from 'next'
import { useRouter } from 'next/router'

import s from './layout.module.scss'

export const Layout: NextPage<PropsWithChildren<any>> = props => {
  const { children } = props
  const router = useRouter()

  const changeLangHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    const locale = event.currentTarget.value

    router.push('/', '', { locale })
  }

  return (
    <main className={s.main}>
      <Header countNotification={5} isAuth></Header>
      <Navbar></Navbar>
      <select defaultValue={router.locale} onChange={changeLangHandler}>
        <option value={'ru'}>ru</option>
        <option value={'en'}>en</option>
      </select>
      {children}
    </main>
  )
}
export const getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}
