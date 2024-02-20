import { useState } from 'react'
import { useSelector } from 'react-redux'

import { ModalEditNewPhoto } from '../../..'
import { RootState } from '../../../../app/appStore'
import { ModalChoosePhoto } from '../modalChoosePhoto/ModalChoosePhoto'
import { ModalCloseCreationPost } from '../modalCloseCreationPost/ModalCloseCreationPost'

type Props = {
  isOpen: boolean
  onClose: () => void
}

export const ModalAddPost = (props: Props) => {
  const { isOpen, onClose } = props

  const [isOpenEditPhotoModal, setIsOpenEditPhotoModal] = useState<boolean>(false)
  const [isOpenCloseCreationModal, setIsOpenCloseCreationModal] = useState<boolean>(false)
  const [imageForEdit, setImageForEdit] = useState<string>('')

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
