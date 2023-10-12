import { HeadMeta } from '@/components/HeadMeta/HeadMeta'
import { getLayout } from '@/components/Layout/Layout'
import { ForgotPassword } from '@/components/forgotPassword/ForgotPassword'

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
