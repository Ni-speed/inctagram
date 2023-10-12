import { ForgotPassword } from '@/components/forgotPassword/ForgotPassword'
import { HeadMeta } from '@/components/headMeta/HeadMeta'
import { getLayout } from '@/components/layout/Layout'

type Props = {}

function ForgotPasswordIndex({}: Props) {
  return (
    <>
      <HeadMeta title={'Forgot Password'} />
      <ForgotPassword />
    </>
  )
}

ForgotPasswordIndex.getLayout = getLayout
export default ForgotPasswordIndex
