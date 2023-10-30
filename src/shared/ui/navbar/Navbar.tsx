import React from 'react'

import { useTranslation } from '../../hooks/useTranslation'
import Link from 'next/link'
import { signOut, useSession } from 'next-auth/react'

import s from './Navbar.module.scss'

export const Navbar = () => {
  const { t } = useTranslation()
  const navigation = [
    { id: 1, path: '/', title: t.navBar.home },
    { id: 2, path: '/signUp', title: t.navBar.signUp },
    { id: 3, path: '/signIn', title: t.navBar.signIn },
    { id: 4, path: '/contacts', title: t.navBar.contacts },
    // { id: 5, path: '/profile', title: t.navBar.profile },
    { id: 6, path: '/forgotPassword', title: t.navBar.forgotPassword },
    { id: 7, path: '/privacyPolicy', title: t.navBar.privacyPolicy },
    { id: 8, path: '/termOfService', title: t.navBar.termsOfService },
  ]
  const session = useSession()

  console.log(session)

  const signOutHandler = () => {
    signOut({
      callbackUrl: '/',
    })
  }

  return (
    <div className={s.navbar}>
      <div className={s.container}>
        <div className={s.link}>
          {navigation.map(({ id, path, title }) => {
            return (
              <Link href={path} key={id}>
                {title}
              </Link>
            )
          })}
          {session?.data && <Link href={'/profile'}>{t.navBar.profile}</Link>}
          {session?.data ? (
            <Link href={'#'} onClick={signOutHandler}>
              Sign Out
            </Link>
          ) : (
            <Link href={'/api/auth/signin'}>Sign In</Link>
          )}
        </div>
      </div>
    </div>
  )
}
