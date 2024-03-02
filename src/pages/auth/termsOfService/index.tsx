import { HeadMeta } from '@/shared/ui/headMeta/HeadMeta'
import { TermOfService, getLayout } from '@/widgets'

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
