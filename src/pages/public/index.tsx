import { HeadMeta } from '@/shared/ui/headMeta/HeadMeta'
import { Public, getLayout } from '@/widgets'

function PublicPage() {
  return (
    <>
      <HeadMeta title={'Public page'} />
      <Public/>
    </>
  )
}

PublicPage.getLayout = getLayout
export default PublicPage
