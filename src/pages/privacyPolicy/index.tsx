import { PrivacyPolicy, getLayout } from '../../widgets'
import { HeadMeta } from '@/shared/ui/headMeta/HeadMeta'

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
