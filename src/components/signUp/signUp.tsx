import React from 'react'

import { GitHUb, Google } from '../../../public/icons'
import { Card } from '@/components/Card'

export const SignUp = () => {
  return (
    <>
      <Card>
        <p style={{ marginBottom: '13px' }}>Sign Up</p>
        <div style={{ display: 'flex', gap: '80px', marginBottom: '24px', width: '330px' }}>
          <Google />
          <GitHUb />
        </div>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '330px' }}>
          <input name={'userName'} placeholder={'User Name'} />
          <input name={'email'} placeholder={'Email'} />
          <input name={'password'} placeholder={'Password'} />
          <input name={'confirmPassword'} placeholder={'Password confirmation'} />
          <div style={{ display: 'flex', gap: '8px' }}>
            <input type={'checkbox'} />
            <p>
              I agree to the <a href={'#'}>Terms of Service</a> and <a href={'#'}>Privacy Policy</a>
            </p>
          </div>
          <button>SIgn Ip</button>
        </form>
        <div>Do you have an account?</div>
        <a href={'https://www.youtube.com/watch?v=eQLxAGEV_6U'}>Sigh In</a>
      </Card>
    </>
  )
}
