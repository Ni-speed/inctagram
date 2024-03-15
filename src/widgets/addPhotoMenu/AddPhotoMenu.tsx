import { ChangeEvent, useRef, useState } from 'react'

import {
  Button,
  Close,
  permittedFileSizeForPost,
  permittedFileTypes,
  useTranslation,
} from '@/shared'
import Image from 'next/image'
import { v4 as uuidv4 } from 'uuid'

import s from './addPhotoMenu.module.scss'

import { useAppDispatch } from '../../app'
import { PhotosState, addPhoto, deletePhoto } from '../../entities/post/model/slice'
import { PlusCurcle } from '../../shared/assets/svg/plusCurcle'

type PropsType = {
  images: PhotosState
  onChange: () => void
}
export const AddPhotoMenu = ({ images, onChange }: PropsType) => {
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
          if (images.length < 10) {
            dispatch(addPhoto({ aspect: NaN, id: uuidv4(), src: reader.result }))
          } else {
            //   Выдать предупреждение, что больше доюавить нельзя
          }
          //   nextModal(true)
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

  const imagesList = images.map(image => {
    return (
      <div key={image.id} style={{ position: 'relative' }}>
        <Image alt={'Photo'} className={s.image} height={82} src={image.src} width={80}></Image>
        <Button
          className={s.close}
          onClick={() => dispatch(deletePhoto({ id: image.id }))}
          variant={'text'}
        >
          <Close height={'12px'} viewBox={'0 0 24 24'} width={'12px'}></Close>
        </Button>
      </div>
    )
  })

  return (
    <div className={s.addPhotoMenu}>
      <div className={s.containerPhoto}>{imagesList}</div>
      <div>
        <PlusCurcle
          className={s.plus}
          onClick={() => inputRef && inputRef.current?.click()}
        ></PlusCurcle>
        <input onChange={uploadHandler} ref={inputRef} style={{ display: 'none' }} type={'file'} />
      </div>
    </div>
  )
}
