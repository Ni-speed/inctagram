import { Button } from '../..'
import { useTranslation } from '../../../hooks'
import { Typography } from '../../typography'
import { Modal } from '../Modal'

import s from './modalSignUp.module.scss'
type ModalSignUpProps = {
  handleButtonClick: () => void
  isOpen: boolean
  onClose: () => void
}

export const ModalSignUp = ({ handleButtonClick, isOpen, onClose }: ModalSignUpProps) => {
  const { t } = useTranslation()

  return (
    <Modal onClose={onClose} open={isOpen} title={t.modalSignUp.title}>
      <div className={s.text}>
        <Typography variant={'regularText16'}>{t.modalSignUp.text}</Typography>
      </div>
      <div className={s.button}>
        <Button onClick={handleButtonClick}>{t.modalSignUp.button}</Button>
      </div>
    </Modal>
  )
}
