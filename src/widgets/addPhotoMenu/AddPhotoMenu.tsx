import { ChangeEvent, useRef } from 'react'

import { PlusCurcle } from '../../shared/assets/svg/plusCurcle'
import Image from 'next/image'

import s from './addPhotoMenu.module.scss'
type PropsType = {
  images: Array<string>
  onChange: () => void
}
export const AddPhotoMenu = ({ images, onChange }: PropsType) => {
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

      if (matches && file.size <= permittedFileSizeForPost) {
        setUploadError('')
        const previewPhoto = function (reader: any) {
          setPreviewAvatar(reader.result)
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

  const imagesList = images.map(image => {
    return (
      <Image
        alt={'Photo'}
        className={s.image}
        height={82}
        key={image}
        src={image}
        width={80}
      ></Image>
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
