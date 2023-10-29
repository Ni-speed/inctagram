import { getLayout } from '../../widgets/ui'
import { ForgotPassword } from '../../widgets/ui/forgotPassword'
import { HeadMeta } from '@/shared/ui/headMeta/HeadMeta'

type Props = {}

function ForgotPasswordIndex({}: Props) {
  const recoverPasswordHandler = () => {
    alert('Not implemented yet')
  }
  return (
    <>
      <HeadMeta title={'Forgot Password'} />
      <ForgotPassword onSubmitHandler={recoverPasswordHandler} />
    </>
  )
}

ForgotPasswordIndex.getLayout = getLayout
export default ForgotPasswordIndex
