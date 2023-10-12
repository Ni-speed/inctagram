import { HeadMeta } from '@/components/HeadMeta/HeadMeta'
import { getLayout } from '@/components/Layout/Layout'
import { SignUp } from '@/components/signUp/signUp'

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
