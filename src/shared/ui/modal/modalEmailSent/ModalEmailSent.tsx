import { Button } from '../..'
import { useTranslation } from '../../../hooks'
import { Typography } from '../../typography'
import { Modal } from '../Modal'

import s from './ModalEmailSent.module.scss'
type Props = {
  handleButtonClick: () => void
  isOpen: boolean
  onClose: () => void
  text: string
}

export const ModalEmailSent = (props: Props) => {
  const { handleButtonClick, isOpen, onClose, text } = props

  const { t } = useTranslation()

  return (
    <Modal onClose={onClose} open={isOpen} title={t.modalEmailSent.title}>
      <div className={s.text}>
        <Typography variant={'regularText16'}>{text}</Typography>
      </div>
      <div className={s.button}>
        <Button onClick={handleButtonClick}>{t.modalEmailSent.button}</Button>
      </div>
    </Modal>
  )
}
