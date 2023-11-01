import { getLayout } from '../../widgets'
import { HeadMeta } from '@/shared/ui/headMeta/HeadMeta'
import { PasswordRecoveryExpired } from '@/widgets/passwordRecoveryExpired/'

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
