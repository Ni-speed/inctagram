import { HeadMeta } from '@/components/HeadMeta/HeadMeta'
import { getLayout } from '@/components/Layout/Layout'
import { SignIn } from '@/components/signIn/SignIn'

type Props = {}

function SignIpIndex({}: Props) {
  return (
    <>
      <HeadMeta title={'Sign In'} />
      <SignIn />
    </>
  )
}

SignIpIndex.getLayout = getLayout
export default SignIpIndex
