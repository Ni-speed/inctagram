import { useEffect } from 'react'

import { useRegistrationConfirmationMutation } from '@/features'
import { HeadMeta } from '@/shared'
import { ConfirmEmail, NotConfirmEmail, getLayout } from '@/widgets'
import { useRouter } from 'next/router'

const ConfirmEmailPage = () => {
  const [mailConfirm, { isLoading, isSuccess }] = useRegistrationConfirmationMutation()
  const router = useRouter()

  useEffect(() => {
    mailConfirm({ code: router.query.token as string })
  }, [mailConfirm, router])

  if (isLoading) {
    return <div>Loading...</div>
  }
  const resendHandler = () => {
    mailConfirm({ code: router.query.token as string })
  }

  return (
    <>
      <HeadMeta title={'Confirm email'} />
      {isLoading && <div>Loading...</div>}
      {isSuccess ? <ConfirmEmail></ConfirmEmail> : <NotConfirmEmail></NotConfirmEmail>}
    </>
  )
}

ConfirmEmailPage.getLayout = getLayout
export default ConfirmEmailPage
