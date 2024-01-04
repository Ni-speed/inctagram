import { GeneralInformation } from '@/widgets'
import { getLayoutProfileSettings } from '@/widgets/layouts'

function GeneralInfo() {
  //const { data, isLoading } = useGetMeQuery()
  //const router = useRouter()
  //http://localhost:3000/en/profile/profileSettings/generalInfo

  return (
    <div>
      <GeneralInformation />
    </div>
  )
}

GeneralInfo.getLayout = getLayoutProfileSettings
export default GeneralInfo
