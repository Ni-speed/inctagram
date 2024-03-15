import { useRef } from 'react'
import { Cropper } from 'react-cropper'

import s from './cropImage.module.scss'

import { useAppDispatch } from '../../../app'
import { PhotoType, changeCurrentPhoto } from '../../../entities/post/model/slice'

type IProps = {
  cropImage: PhotoType
}

export const CropImage = ({ cropImage }: IProps) => {
  const cropperRef = useRef<Cropper | any>(null)
  const dispatch = useAppDispatch()

  return (
    <Cropper
      aspectRatio={cropImage.aspect}
      autoCropArea={1}
      background={false}
      center={false}
      className={s.crop}
      crop={e => {
        dispatch(changeCurrentPhoto(cropperRef.current.cropper.getCroppedCanvas().toDataURL()))
        // setCropImage(cropperRef.current.cropper.getCroppedCanvas().toDataURL())
      }}
      cropBoxResizable={false}
      dragMode={'move'}
      guides={false}
      hidden
      highlight={false}
      minContainerHeight={503}
      minContainerWidth={490}
      ref={cropperRef}
      src={cropImage.src}
      zoomOnWheel={false}
    />
  )
}
