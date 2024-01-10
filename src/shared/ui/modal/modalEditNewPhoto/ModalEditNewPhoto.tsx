import { Button } from '../..'
import { ArrowLeftIcon } from '../../..'
import { useTranslation } from '../../../hooks'
import { Typography } from '../../typography'
import { Modal } from '../Modal'
import Image from 'next/image'

import s from './modalEditNewPhoto.module.scss'
type Props = {
  image: string
  onClose: () => void
  open: boolean
}

export const ModalEditNewPhoto = (props: Props) => {
  const { image, onClose, open } = props

  const { t } = useTranslation()
  const title = (
    <div className={s.title}>
      <ArrowLeftIcon className={s.arrow} onClick={onClose}></ArrowLeftIcon>
      <div>{t.modalAddPost.titleEditFhoto}</div>
      <Button variant={'text'}>
        <Typography variant={'h3'}>{t.modalAddPost.button.next}</Typography>
      </Button>
    </div>
  )

  return (
    <Modal onClose={onClose} open={open} showCloseButton={false} size={'md'} title={title}>
      <div className={s.imageContainer}>
        <Image alt={'image'} className={s.image} fill src={image} />
      </div>
    </Modal>
  )
}
