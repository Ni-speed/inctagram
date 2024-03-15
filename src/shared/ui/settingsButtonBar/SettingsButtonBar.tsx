import React, { useState } from 'react'

import { Typography } from '@/shared'
import { clsx } from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'

import s from './SettingsButtonBar.module.scss'

type Active = 'Account' | 'Devices' | 'General' | 'payments'
export const SettingsButtonBar = () => {
  const router = useRouter()

  const [active, setActive] = useState<Active>('General')
  const activeHandler = (linkName: Active) => {
    setActive(linkName)
  }

  return (
    <div className={s.main}>
      <Link
        className={clsx(s.link, active == 'General' ? s.activeLink : '')}
        href={`/profileSettings/generalInfo/${router.query.id}`}
        onClick={() => activeHandler('General')}
      >
        <Typography className={s.linkText} variant={'h3'}>
          General information
        </Typography>
      </Link>
      <Link
        className={clsx(s.link, active == 'Devices' ? s.activeLink : '')}
        href={`/profileSettings/devices/${router.query.id}`}
        onClick={() => activeHandler('Devices')}
      >
        <Typography className={s.linkText} variant={'h3'}>
          Devices
        </Typography>
      </Link>
      <Link
        className={clsx(s.link, active == 'Account' ? s.activeLink : '')}
        href={`/profileSettings/accountManagement/${router.query.id}`}
        onClick={() => activeHandler('Account')}
      >
        <Typography className={s.linkText} variant={'h3'}>
          Account Management
        </Typography>
      </Link>
      <Link
        className={clsx(s.link, active == 'payments' ? s.activeLink : '')}
        href={`/profileSettings/myPayments/${router.query.id}`}
        onClick={() => activeHandler('payments')}
      >
        <Typography className={s.linkText} variant={'h3'}>
          My payments
        </Typography>
      </Link>
    </div>
  )
}
