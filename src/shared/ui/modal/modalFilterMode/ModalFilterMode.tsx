import { useRef, useState } from 'react'

import { Button } from '../..'
import { ArrowLeftIcon } from '../../..'
import { useGetMeQuery, useGetProfileQuery } from '../../../../features'
import { useTranslation } from '../../../hooks'
import { Typography } from '../../typography'
import { Modal } from '../Modal'
import { AddDescription } from './addDescription/AddDescription'
import { FilterItems } from './filterItems/FilterItems'
import { skipToken } from '@reduxjs/toolkit/query'
import domtoimage from 'dom-to-image'
import Image from 'next/image'

import s from './modalFilterMode.module.scss'
type Props = {
  image: string
  onClose: () => void
  open: boolean
}

export const ModalFilterMode = (props: Props) => {
  const { image, onClose, open } = props
  const refImage = useRef(null)
  const { t } = useTranslation()
  const [filter, setFilter] = useState('normal')
  const [publicationnMode, setPublicationMode] = useState(false)
  const [valueTextarea, setValueTextarea] = useState('')
  const [qweqwe, setimage] = useState<any>('')
  const titlePublicationMode = (
    <div className={s.title}>
      <ArrowLeftIcon className={s.arrow} onClick={() => setPublicationMode(false)}></ArrowLeftIcon>
      <div>{t.modalAddPost.titlePublicationMode}</div>
      <Button
        onClick={() => {
          setPublicationMode(true)
        }}
        variant={'text'}
      >
        <Typography variant={'h3'}>{t.modalAddPost.button.next}</Typography>
      </Button>
    </div>
  )
  const titleFilterMode = (
    <div className={s.title}>
      <ArrowLeftIcon className={s.arrow} onClick={onClose}></ArrowLeftIcon>
      <div>{t.modalAddPost.titleFilterMode}</div>
      <Button
        onClick={() => {
          setPublicationMode(true)
        }}
        variant={'text'}
      >
        <Typography variant={'h3'}>{t.modalAddPost.button.next}</Typography>
      </Button>
    </div>
  )

  return (
    <Modal
      onClose={onClose}
      open={open}
      showCloseButton={false}
      size={'superLg'}
      title={publicationnMode ? titlePublicationMode : titleFilterMode}
    >
      <div className={s.container}>
        <div className={s.imageContainer}>
          <Image
            alt={'photo'}
            className={`${filter} ${s.mainImage}`}
            height={490}
            id={'image'}
            ref={refImage}
            src={image}
            width={490}
          ></Image>
        </div>
        {!publicationnMode ? (
          <div className={s.filtersContainer}>
            <FilterItems
              image={image}
              setFilter={filter => {
                setFilter(filter)
                domtoimage.toBlob(refImage.current).then((blob: any) => {
                  //   const img = refImage.current
                  //   const canvas = document.createElement('canvas')
                  //   const context = canvas.getContext('2d')

                  //   context && img && context.drawImage(img, 10, 10)

                  //   console.log(canvas.toDataURL('image/jpeg', 1.0))
                  //   if (blob) {
                  // Create a File object from a Blob
                  const croppedImageFile = new File([blob], 'croppedImage.jpg', {
                    type: 'image/jpeg',
                  })

                  console.log(croppedImageFile)
                  const formData = new FormData()

                  formData.append('file', 'croppedImageFile')
                  console.log(formData)
                  //   if (croppedImageFile) {
                  //     formData.append('file', croppedImageFile)
                  //   }
                  // // try {
                  // setimage(formData)
                  // console.log(blob)
                  // window.saveAs(blob, 'my-node.png')
                  // } catch (e: unknown) {}
                  //   }
                  //   console.log(formData)
                }, 'image/jpeg')
              }}
            ></FilterItems>
          </div>
        ) : (
          <div className={s.addDescriptionContainer}>
            <AddDescription
              onChange={value => setValueTextarea(value)}
              value={valueTextarea}
            ></AddDescription>
          </div>
        )}
      </div>
    </Modal>
  )
}
