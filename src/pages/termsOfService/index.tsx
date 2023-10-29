import { TermOfService, getLayout } from '../../widgets/ui'
import { HeadMeta } from '@/shared/ui/headMeta/HeadMeta'

const TermOfServiceIndex = () => {
  return (
    <>
      <HeadMeta title={'Term of service'} />
      <TermOfService />
    </>
  )
}

TermOfServiceIndex.getLayout = getLayout
export default TermOfServiceIndex
