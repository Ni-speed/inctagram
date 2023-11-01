import { TermOfService, getLayout } from '../../widgets'
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
