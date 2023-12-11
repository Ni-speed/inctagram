import { ChangeEvent, memo, useCallback, useRef, useState } from 'react'

import { useDeleteAvatarMutation, useUploadAvatarMutation } from '@/features'
import { Button, DeleteIcon, Loader, Modal, Typography, useTranslation } from '@/shared'
import { Avatar } from '@/shared/ui/avatar/Avatar'
import {
  permittedFileSize,
  permittedFileTypes,
} from '@/widgets/generalInfo/ui/generalInfoForm/imageConst'

import s from './ProfileImage.module.scss'

type ProfileImageProps = {
  avatars?: string
  className?: string
}

export const ProfileImage = memo(({ avatars = '' }: ProfileImageProps) => {
  const { t } = useTranslation()
  const [uploadAvatar, { isLoading: isAvatarUploading }] = useUploadAvatarMutation()
  const [deleteAvatar] = useDeleteAvatarMutation()

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [url, setUrl] = useState<string>(avatars)
  const [newAvatarFile, setNewAvatarFile] = useState<File | null>(null)
  const [previewAvatar, setPreviewAvatar] = useState<string>('')
  const [uploadError, setUploadError] = useState<string>('')
  const [avatarEditMode, setAvatarEditMode] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
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

      if (matches && file.size <= permittedFileSize) {
        setUploadError('')
        const previewPhoto = function (reader: any) {
          setPreviewAvatar(reader.result)
          setAvatarEditMode(true)
        }

        const reader = new FileReader()

        reader.addEventListener('load', previewPhoto.bind(this, reader))
        reader.readAsDataURL(file)
        setNewAvatarFile(file)
      } else if (!matches) {
        setUploadError(t.generalInfo.imageFormatError)
      } else {
        setUploadError(t.generalInfo.imageSizeError)
      }
    }
  }

  const handleCloseModal = () => {
    setPreviewAvatar('')
    setIsModalOpen(false)
    setAvatarEditMode(false)
  }

  const deleteAvatarHandler = useCallback(async () => {
    try {
      await deleteAvatar().unwrap()
      setUrl('')
    } catch (e: unknown) {
      const error = e as any

      console.log(error)
    }
  }, [deleteAvatar])

  const handleSaveCloseModal = async () => {
    const formData = new FormData()

    if (newAvatarFile) {
      formData.append('file', newAvatarFile)
    }
    try {
      await uploadAvatar(formData).unwrap()
      setUrl(previewAvatar)
      setIsModalOpen(false)
      setAvatarEditMode(false)
    } catch (e: unknown) {
      const error = e as any

      setUploadError(error.data.message)
    }
  }

  return (
    <div className={s.profileImageContainer}>
      <div className={s.userImageBox}>
        <div className={s.userImage}>
          <div className={s.profileAvatar}>
            <Avatar photo={url} size={192} />
            {url && (
              <Button
                className={s.deleteAvatarIcon}
                onClick={deleteAvatarHandler}
                type={'button'}
                variant={'primary'}
              >
                <DeleteIcon />
              </Button>
            )}
          </div>
        </div>
        <Button
          fullWidth
          onClick={() => {
            setIsModalOpen(true)
          }}
          variant={'primary'}
        >
          {t.generalInfo.addAvatar}
        </Button>
      </div>
      <Modal onClose={handleCloseModal} open={isModalOpen} title={t.generalInfo.addAvatar}>
        <div className={s.modalInnerContent}>
          {isAvatarUploading ? (
            <Loader className={s.modalLoader} />
          ) : (
            <>
              {uploadError && <div className={s.uploadError}>{uploadError}</div>}
              <div className={s.addUserImage}>
                <Avatar photo={previewAvatar} size={316} />
              </div>
              {avatarEditMode ? (
                <Button className={s.saveButton} onClick={handleSaveCloseModal} variant={'primary'}>
                  <Typography variant={'h3'}>{t.generalInfo.saveChanges}</Typography>
                </Button>
              ) : (
                <>
                  <Button onClick={() => inputRef && inputRef.current?.click()} variant={'primary'}>
                    {t.generalInfo.selectImage}
                  </Button>
                  <input
                    onChange={uploadHandler}
                    ref={inputRef}
                    style={{ display: 'none' }}
                    type={'file'}
                  />
                </>
              )}
            </>
          )}
        </div>
      </Modal>
    </div>
  )
})
