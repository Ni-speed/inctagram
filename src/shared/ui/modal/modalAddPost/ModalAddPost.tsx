import { ChangeEvent, useRef, useState } from 'react'
import { Cropper } from 'react-cropper'

import { Button } from '../..'
import {
  ImageOutline,
  ModalEditNewPhoto,
  permittedFileSizeForPost,
  permittedFileTypes,
} from '../../..'
import { useTranslation } from '../../../hooks'
import { Typography } from '../../typography'
import { Modal } from '../Modal'
import { ModalChoosePhoto } from '../modalChoosePhoto/ModalChoosePhoto'
import { ModalCloseCreationPost } from '../modalCloseCreationPost/ModalCloseCreationPost'

import s from './ModalAddPost.module.scss'
type Props = {
  isOpen: boolean
  onClose: () => void
}

export const ModalAddPost = (props: Props) => {
  const { isOpen, onClose } = props
  const [isOpenEditPhotoModal, setIsOpenEditPhotoModal] = useState<boolean>(false)
  const [isOpenCloseCreationModal, setIsOpenCloseCreationModal] = useState<boolean>(false)
  const [imageForEdit, setImageForEdit] = useState<string>('')
  const { t } = useTranslation()

  return (
    <>
      {!isOpenEditPhotoModal ? (
        <ModalChoosePhoto
          nextModal={() => setIsOpenEditPhotoModal(true)}
          onClose={onClose}
          open={isOpen}
          setPreviewAvatar={setImageForEdit}
        ></ModalChoosePhoto>
      ) : (
        <ModalEditNewPhoto
          image={imageForEdit}
          onClose={() => {
            setIsOpenCloseCreationModal(true)
          }}
          open={isOpen}
        ></ModalEditNewPhoto>
      )}
      <ModalCloseCreationPost
        buttonHandler={() => {
          setIsOpenCloseCreationModal(false)
          setIsOpenEditPhotoModal(false)
          onClose()
        }}
        onClose={() => setIsOpenCloseCreationModal(false)}
        open={isOpenCloseCreationModal}
      ></ModalCloseCreationPost>
    </>
  )
}
