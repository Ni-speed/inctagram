import { HeadMeta } from '@/shared/ui/headMeta/HeadMeta'
import { SingIn, getLayout } from '@/widgets'

type Props = {}

function SignIpIndex({}: Props) {
  return (
    <>
      <HeadMeta title={'Sign In'} />
      <SingIn />
    </>
  )
}

SignIpIndex.getLayout = getLayout
export default SignIpIndex
