'use client'
import React, { ReactNode } from 'react'

import { Github, Google } from '../../assets/svg'
import { Card } from '../card'
import { Button } from '@/shared/ui'
import { useSearchParams } from 'next/navigation'
import { signIn } from 'next-auth/react'

export const SignIn = () => {
  return (
    <>
      <Card>
        <p style={{ marginBottom: '13px' }}>Sign In</p>
        <div style={{ display: 'flex', gap: '80px', marginBottom: '24px', width: '330px' }}>
          <GoogleButton>
            <Google />
          </GoogleButton>
          <Github />
        </div>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '330px' }}>
          <input name={'email'} placeholder={'Email'} />
          <input name={'password'} placeholder={'Password'} />

          <a href={'#'}>Forgot Password?</a>

          <button>Sign In</button>
        </form>
        <div>Do you have an account?</div>
        <a href={'https://www.youtube.com/watch?v=eQLxAGEV_6U'}>Sigh Up</a>
      </Card>
    </>
  )
}

export const GoogleButton = ({ children }: { children: ReactNode }) => {
  const searchParams = useSearchParams()
  const callbackUrl = searchParams?.get('callbackUrl') || '/profile'
  const signInHandler = () => {
    signIn('google', { callbackUrl })
  }

  return (
    <Button onClick={signInHandler} variant={'text'}>
      {children}
    </Button>
  )
}
