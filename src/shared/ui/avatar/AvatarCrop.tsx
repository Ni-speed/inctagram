import React, { useRef, useState } from 'react'
import { Cropper } from 'react-cropper'

import { Avatar } from '@/shared/ui/avatar/Avatar'

import 'cropperjs/dist/cropper.css'

type ImageCropperProps = {
  onCrop: (croppedImage: any) => void
}

const ImageCropper: React.FC<ImageCropperProps> = ({ onCrop }) => {
  const cropperRef = useRef<Cropper>(null)
  const [imageSrc, setImageSrc] = useState<null | string>(null)
  const [ava, setAva] = useState<any>('')

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]

    if (file) {
      const reader = new FileReader()

      reader.onload = () => {
        setImageSrc(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  /*const handleCropClick = () => {
                if (cropperRef.current) {
                  // Use the `getCroppedCanvas` method through the `cropper` property
                  const croppedCanvas = cropperRef.current.cropper.getCroppedCanvas()
            
                  if (croppedCanvas) {
                    const croppedImage = croppedCanvas.toDataURL()
            
                    fetch(croppedImage)
                      .then(res => res.blob())
                      .then(blob => {
                        // Создать объект File из Blob
                        const croppedImageFile = new File([blob], 'croppedImage.jpg', { type: 'image/jpeg' })
            
                        // Отправить файл на сервер
                        setAva(croppedImageFile)
                        console.log('croppedImageFile', croppedImageFile)
                        onCrop(croppedImageFile)
                      })
            
                    /!*setAva(croppedImage)
                    console.log('croppedCanvas', croppedCanvas)
                    onCrop(croppedImage)*!/
                  }
                }
              }*/

  const handleCropClick = () => {
    if (cropperRef.current) {
      const croppedCanvas = cropperRef.current.cropper.getCroppedCanvas()

      if (croppedCanvas) {
        const newAva = croppedCanvas.toDataURL()

        setAva(newAva)
        // Преобразовать Canvas в Blob
        croppedCanvas.toBlob((blob: any) => {
          if (blob) {
            // Создать объект File из Blob
            const croppedImageFile = new File([blob], 'croppedImage.jpg', { type: 'image/jpeg' })

            // Отправить файл на сервер
            onCrop(croppedImageFile)
          }
        }, 'image/jpeg')
      }
    }
  }

  return (
    <div>
      <input accept={'image/*'} onChange={handleImageChange} type={'file'} />
      {imageSrc && (
        <div>
          <Cropper
            ref={cropperRef}
            src={imageSrc}
            style={{ maxHeight: '400px', width: '400px' }}
            // Add necessary options for cropper configuration
          />
          <button onClick={handleCropClick}>Crop</button>
        </div>
      )}
      <Avatar photo={ava} size={192} />
    </div>
  )
}

export default ImageCropper
