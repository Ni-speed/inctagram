import { ChangeEvent, useRef, useState } from 'react'

import { Modal } from '..'
import {
  Button,
  ImageOutline,
  Typography,
  permittedFileSizeForPost,
  permittedFileTypes,
  useTranslation,
} from '../../..'
import { useAppDispatch } from '../../../../app'
import { addPhoto } from '../../../../entities'
import { v4 as uuidv4 } from 'uuid'

import s from './modalChoosePhoto.module.scss'
type Props = {
  nextModal: (value: boolean) => void
  onClose: () => void
  open: boolean
  //   setPreviewAvatar: (avatar: string) => void
}
export const ModalChoosePhoto = (props: Props) => {
  const { nextModal, onClose, open } = props
  const inputRef = useRef<HTMLInputElement>(null)
  const [uploadError, setUploadError] = useState<string>('')

  const dispatch = useAppDispatch()
  const { t } = useTranslation()

  const uploadHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const uploadInput = e.target

    if (uploadInput instanceof HTMLInputElement && uploadInput.files && uploadInput.files.length) {
      const file = uploadInput.files[0]

      if (!file) {
        return setUploadError(t.generalInfo.imageUploadError)
      }
      const fileName = file.name.toLowerCase()

      const matches = [...permittedFileTypes].some(it => {
        return fileName.endsWith(it)
      })

      if (matches && file.size <= permittedFileSizeForPost) {
        setUploadError('')
        const previewPhoto = function (reader: any) {
          //   setPreviewAvatar(reader.result)
          dispatch(addPhoto({ aspect: NaN, id: uuidv4(), src: reader.result }))
          nextModal(true)
        }

        const reader = new FileReader()

        reader.addEventListener('load', previewPhoto.bind(this, reader))
        reader.readAsDataURL(file)
      } else if (!matches) {
        setUploadError(t.generalInfo.imageFormatError)
      } else {
        setUploadError(t.generalInfo.imageSizeError)
      }
    }
  }

  return (
    <Modal
      onClose={onClose}
      open={open}
      showCloseButton
      size={'md'}
      title={t.modalAddPost.titleAddFhoto}
    >
      <div className={s.container}>
        <div className={s.svgContainer}>
          <ImageOutline></ImageOutline>
          {uploadError && <div className={s.uploadError}>{uploadError}</div>}
        </div>
        <Button
          className={s.buttonFirst}
          fullWidth
          onClick={() => inputRef && inputRef.current?.click()}
        >
          <Typography variant={'h3'}>{t.modalAddPost.button.selectFromComputer}</Typography>
        </Button>
        <input onChange={uploadHandler} ref={inputRef} style={{ display: 'none' }} type={'file'} />
        <Button className={s.buttonSecond} fullWidth variant={'outline'}>
          <Typography variant={'h3'}>{t.modalAddPost.button.openDraft}</Typography>
        </Button>
      </div>
    </Modal>
  )
}
