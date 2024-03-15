import { HeadMeta } from '../../shared'
import { Profile, getLayoutSidebar } from '@/widgets'

function ProfileIndex() {
  return (
    <>
      <HeadMeta title={'Profile'} />
      <Profile />
    </>
  )
}
ProfileIndex.getLayout = getLayoutSidebar
export default ProfileIndex
