import { useSelector } from 'react-redux'

import { useAppDispatch } from '../../app'
import { RootState } from '../../app/appStore'
import { ControlButtons } from './controlButtons/ControlButtons'
import { CropImage } from './cropImage/CropImage'

export const CropImages = () => {
  const currentImage = useSelector((state: RootState) => state.photos.currentPhoto)
  const photos = useSelector((state: RootState) => state.photos.photos)

  return (
    <>
      <CropImage cropImage={currentImage} key={currentImage.id}></CropImage>
      {photos.length > 1 && <ControlButtons />}
    </>
  )
}
