import { PropsWithChildren, ReactElement } from 'react'

import { useGetMeQuery } from '@/features'
import { Header } from '@/widgets'
import { NextPage } from 'next'

import s from './layout.module.scss'

export const Layout: NextPage<PropsWithChildren<any>> = props => {
  const { children } = props
  const { data, isFetching, isLoading } = useGetMeQuery()

  const classNameContainer = isLoading || isFetching ? s.disabled : undefined

  return (
    <main className={s.main}>
      <Header username={data?.userName}></Header>
      <div className={`${s.container} ${classNameContainer}`}>{children}</div>
    </main>
  )
}
