import { ChangeEvent, PropsWithChildren, ReactElement } from 'react'

import { Navbar } from '@/shared/ui/navbar/Navbar'
import { NextPage } from 'next'
import { useRouter } from 'next/router'

import styles from '@/styles/Home.module.scss'

export const Layout: NextPage<PropsWithChildren<{}>> = ({ children }) => {
  const router = useRouter()

  const changeLangHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    const locale = event.currentTarget.value

    router.push('/', '', { locale })
  }

  return (
    <main className={`${styles.main}`}>
      <Navbar />
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
