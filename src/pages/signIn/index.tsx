import { getLayout } from '@/components/layout/Layout'
import { HeadMeta } from '@/shared/ui/headMeta/HeadMeta'
import { SignIn } from '@/shared/ui/signIn/SignIn'

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
