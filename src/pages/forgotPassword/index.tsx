import { getLayout } from '@/components/layout/Layout'
import { ForgotPassword } from '@/shared/ui/forgotPassword/ForgotPassword'
import { HeadMeta } from '@/shared/ui/headMeta/HeadMeta'

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
