import { ForgotPassword } from '../../shared/ui'
import { getLayout } from '../../widgets/ui'
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
