import { useEffect } from 'react'

import { useGetMeQuery } from '@/features'
import { getLayoutSidebar } from '@/widgets'
import { getLayoutProfileSettings } from '@/widgets/layouts'
import { useRouter } from 'next/router'

function Devices() {
  //const { data, isLoading } = useGetMeQuery()
  //const router = useRouter()
  //http://localhost:3000/en/profile/profileSettings/generalInfo

  return (
    <div>
      <h2>Devices</h2>
    </div>
  )
}

Devices.getLayout = getLayoutProfileSettings
export default Devices
