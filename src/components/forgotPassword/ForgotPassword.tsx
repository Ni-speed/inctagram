import { Card } from '../card'

export const ForgotPassword = () => {
  return (
    <>
      <Card>
        <p style={{ marginBottom: '13px' }}>Forgot Password</p>

        <form style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '330px' }}>
          <input name={'email'} placeholder={'Email'} />
          <div style={{ display: 'flex', gap: '8px' }}>
            <p>Enter your email address and we will send you further instructions</p>
          </div>
          <button>Send Link</button>
        </form>
        <a href={'https://www.youtube.com/watch?v=eQLxAGEV_6U'}>Back to Sign In</a>
        <div>Captcha</div>
      </Card>
    </>
  )
}
