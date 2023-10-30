import { HeadMeta } from '@/shared/ui/headMeta/HeadMeta'
import { getLayout } from '@/widgets/ui'
import { SingIn } from '@/widgets/ui/SingIn/SingIn'

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
