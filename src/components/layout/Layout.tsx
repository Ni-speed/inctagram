import { PropsWithChildren, ReactElement } from 'react'

import { Navbar } from '@/shared/ui/navbar/Navbar'
import { NextPage } from 'next'

import styles from '@/styles/Home.module.scss'

export const Layout: NextPage<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <main className={`${styles.main}`}>
      <Navbar />
      {children}
    </main>
  )
}
export const getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}
