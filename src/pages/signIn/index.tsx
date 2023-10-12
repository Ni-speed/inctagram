import { HeadMeta } from '@/components/headMeta/HeadMeta'
import { getLayout } from '@/components/layout/Layout'
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
