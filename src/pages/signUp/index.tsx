import { getLayout } from '../../widgets/ui'
import { HeadMeta } from '@/shared/ui/headMeta/HeadMeta'
import { SignUp } from '@/shared/ui/signUp/signUp'

type Props = {}

function SignUpIndex({}: Props) {
  return (
    <>
      <HeadMeta title={'Sign Up'} />
      <SignUp />
    </>
  )
}

SignUpIndex.getLayout = getLayout
export default SignUpIndex
