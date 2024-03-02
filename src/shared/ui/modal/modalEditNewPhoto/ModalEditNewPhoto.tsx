import { useRef, useState } from 'react'
import { Cropper } from 'react-cropper'
import { useSelector } from 'react-redux'

import { RootState } from '../../../../app/appStore'
import { AddPhotoMenu, CropImages, ExpandMenu, ZoomMenu } from '../../../../widgets'
import { useTranslation } from '../../../hooks'
import { Typography } from '../../typography'
import { Modal } from '../Modal'
import { ArrowLeftIcon, Button, ExpandIcon, MaximizeOutline, ModalFilterMode } from '@/shared'

import s from './modalEditNewPhoto.module.scss'

type Props = {
  image: string
  onClose: () => void
  open: boolean
}

export const ModalEditNewPhoto = (props: Props) => {
  const { image, onClose, open } = props
  const photos = useSelector((state: RootState) => state.photos.photos)

  const cropperRef = useRef<Cropper | any>(null)
  const { t } = useTranslation()
  const [isOpenExpendMenu, setIsOpenExpendMenu] = useState(false)
  const [isOpenAddPhotoMenu, setIsOpenAddPhotoMenu] = useState(false)
  const [isOpenZoomMenu, setIsOpenZoomMenu] = useState(false)
  const [filterMode, setFilterMode] = useState(false)
  const [aspect, setAspect] = useState<number>(NaN)
  const [valueSlider, setValueSlider] = useState<number>(0.1)
  const [cropImage, setCropImage] = useState<string>('')

  const titleEditFhoto = (
    <div className={s.title}>
      <ArrowLeftIcon className={s.arrow} onClick={onClose}></ArrowLeftIcon>
      <div>{t.modalAddPost.titleEditFhoto}</div>
      <Button
        onClick={() => {
          setFilterMode(true)
        }}
        variant={'text'}
      >
        <Typography variant={'h3'}>{t.modalAddPost.button.next}</Typography>
      </Button>
    </div>
  )

  return !filterMode ? (
    <Modal onClose={onClose} open={open} showCloseButton={false} size={'md'} title={titleEditFhoto}>
      <div className={s.imageContainer}>
        {/* <CropImages></CropImages> */}

        <Cropper
          aspectRatio={aspect}
          autoCropArea={1}
          background={false}
          center={false}
          className={s.crop}
          crop={e => {
            setCropImage(cropperRef.current.cropper.getCroppedCanvas().toDataURL())
          }}
          cropBoxResizable={false}
          dragMode={'move'}
          guides={false}
          hidden
          highlight={false}
          minContainerHeight={503}
          minContainerWidth={490}
          ref={cropperRef}
          src={image}
          zoomOnWheel={false}
        />
      </div>
      <div className={s.filtersContainer}></div>
      <Button
        className={`${s.iconExpend} ${s.icon}`}
        onClick={() => {
          setIsOpenAddPhotoMenu(false)
          setIsOpenZoomMenu(false)
          setIsOpenExpendMenu(!isOpenExpendMenu)
        }}
        variant={'text'}
      >
        <ExpandIcon className={s.svg}></ExpandIcon>
      </Button>
      <Button
        className={`${s.iconZoom} ${s.icon}`}
        onClick={() => {
          setIsOpenExpendMenu(false)
          setIsOpenAddPhotoMenu(false)
          setIsOpenZoomMenu(!isOpenZoomMenu)
        }}
        variant={'text'}
      >
        <MaximizeOutline className={s.svg}></MaximizeOutline>
      </Button>
      {/* <Button
        className={`${s.iconImage} ${s.icon}`}
        onClick={() => {
          setIsOpenExpendMenu(false)
          setIsOpenZoomMenu(false)
          setIsOpenAddPhotoMenu(!isOpenAddPhotoMenu)
        }}
        variant={'text'}
      >
        <ImageOutline className={s.svg}></ImageOutline>
      </Button> */}
      {isOpenExpendMenu && (
        <ExpandMenu
          onChange={aspect => {
            cropperRef.current.cropper.setAspectRatio(aspect)
            setAspect(aspect)
          }}
          value={aspect}
        />
      )}
      {isOpenZoomMenu && (
        <ZoomMenu
          onChange={([valueSlider]) => {
            cropperRef.current.cropper.zoomTo(valueSlider)
            setValueSlider(valueSlider)
          }}
          value={[valueSlider]}
        />
      )}
      {/* {isOpenAddPhotoMenu && <AddPhotoMenu images={photos} onChange={() => {}} />} */}
    </Modal>
  ) : (
    <ModalFilterMode image={cropImage} onClose={onClose} open={open}></ModalFilterMode>
  )
}
