import React from 'react'

import { GitHUb, Google } from '../../../../public/icons'
import { Card } from '../card'

export const SignIn = () => {
  return (
    <>
      <Card>
        <p style={{ marginBottom: '13px' }}>Sign In</p>
        <div style={{ display: 'flex', gap: '80px', marginBottom: '24px', width: '330px' }}>
          <Google />
          <GitHUb />
        </div>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '330px' }}>
          <input name={'email'} placeholder={'Email'} />
          <input name={'password'} placeholder={'Password'} />

          <a href={'#'}>Forgot Password?</a>

          <button>Sign Up</button>
        </form>
        <div>Do you have an account?</div>
        <a href={'https://www.youtube.com/watch?v=eQLxAGEV_6U'}>Sigh In</a>
      </Card>
    </>
  )
}
