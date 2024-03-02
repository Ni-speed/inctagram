import { HeadMeta } from '@/shared/ui/headMeta/HeadMeta'
import { PrivacyPolicy, getLayout } from '@/widgets'

const PrivacyPolicyPage = () => {
  return (
    <>
      <HeadMeta title={'Privacy policy'} />
      <PrivacyPolicy />
    </>
  )
}

PrivacyPolicyPage.getLayout = getLayout
export default PrivacyPolicyPage
