import { getLayout } from '../../widgets/ui'
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
