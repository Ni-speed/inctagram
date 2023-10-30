import { getLayout } from '../../widgets/ui'
import { ForgotPassword } from '../../widgets/ui/forgotPassword'
import { HeadMeta } from '@/shared/ui/headMeta/HeadMeta'
import { PasswordRecoveryExpired } from '@/widgets/ui/passwordRecoveryExpired/PasswordRecoveryExpired'

type Props = {}

function ForgotPasswordIndex({}: Props) {
  return (
    <>
      <HeadMeta title={'Forgot Password'} />
      <PasswordRecoveryExpired />
    </>
  )
}

ForgotPasswordIndex.getLayout = getLayout
export default ForgotPasswordIndex
