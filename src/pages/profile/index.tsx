import { getLayout } from '@/widgets/ui'
import Image from 'next/image'
import { useSession } from 'next-auth/react'

function ProfileIndex() {
  const session = useSession()

  return (
    <div style={{ marginTop: '100px' }}>
      <h2>Profile of: {session?.data?.user?.name} </h2>
      <h2>Email {session?.data?.user?.email} </h2>
      {session?.data?.user?.image && (
        <Image alt={'img'} height={200} priority src={session.data.user.image} width={200} />
      )}
    </div>
  )
}
ProfileIndex.getLayout = getLayout
export default ProfileIndex
