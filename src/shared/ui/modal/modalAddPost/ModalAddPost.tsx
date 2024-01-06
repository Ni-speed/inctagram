import { Button } from '../..'
import { ImageOutline } from '../../..'
import { useTranslation } from '../../../hooks'
import { Typography } from '../../typography'
import { Modal } from '../Modal'

import s from './ModalAddPost.module.scss'
type Props = {
  isOpen: boolean
  onClose: () => void
}

export const ModalAddPost = (props: Props) => {
  const { isOpen, onClose } = props

  const { t } = useTranslation()

  return (
    <Modal onClose={onClose} open={isOpen} showCloseButton size={'md'} title={t.modalAddPost.title}>
      <div className={s.container}>
        <div className={s.svgContainer}>
          <ImageOutline></ImageOutline>
        </div>
        <Button className={s.buttonFirst} fullWidth>
          <Typography variant={'h3'}>{t.modalAddPost.button.selectFromComputer}</Typography>
        </Button>
        <Button className={s.buttonSecond} fullWidth variant={'outline'}>
          <Typography variant={'h3'}>{t.modalAddPost.button.openDraft}</Typography>
        </Button>
      </div>
    </Modal>
  )
}
