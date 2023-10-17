import React from 'react'

import Link from 'next/link'

import s from './Navbar.module.scss'

const navigation = [
  { id: 1, path: '/', title: 'Home' },
  { id: 2, path: '/signUp', title: 'Sign Up' },
  { id: 3, path: '/signIn', title: 'Sign In' },
  { id: 4, path: '/contacts', title: 'Contacts' },
  { id: 5, path: '/profile', title: 'Profile' },
  { id: 6, path: '/forgotPassword', title: 'Forgot Password' },
  { id: 7, path: '/characters', title: 'Character' },
  { id: 8, path: '/termOfService', title: 'Term Of Service' },
]

export const Navbar = () => {
  return (
    <div className={s.link}>
      {navigation.map(({ id, path, title }) => {
        return (
          <Link href={path} key={id}>
            {title}
          </Link>
        )
      })}
    </div>
  )
}
