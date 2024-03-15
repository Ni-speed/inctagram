import { Profile, getLayoutSidebar } from '@/widgets'

import { HeadMeta } from '../../shared'

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
