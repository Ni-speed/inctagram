import { useEffect } from 'react'

import { useRegistrationConfirmationMutation } from '@/features'
import { HeadMeta } from '@/shared'
import { ConfirmEmail, NotConfirmEmail, getLayout } from '@/widgets'
import { useRouter } from 'next/router'

const ConfirmEmailCodePage = () => {
  const [registrationConfirmation, { isLoading, isSuccess }] = useRegistrationConfirmationMutation()

  const { query } = useRouter()
  const router = useRouter()

  //console.log('query', query)
  useEffect(() => {
    registrationConfirmation({ code: query.code as string })
      .unwrap()
      .then(res => {
        router.push('auth/signIn')
      })
  }, [registrationConfirmation, query])

  if (isLoading) {
    return <div>Loading...</div>
  }
  const resendHandler = () => {
    registrationConfirmation({ code: query.code as string })
  }

  return (
    <>
      <HeadMeta title={'Confirm email'} />
      {isLoading && <div>Loading...</div>}
      {isSuccess ? <ConfirmEmail></ConfirmEmail> : <NotConfirmEmail></NotConfirmEmail>}
    </>
  )
}

ConfirmEmailCodePage.getLayout = getLayout
export default ConfirmEmailCodePage
