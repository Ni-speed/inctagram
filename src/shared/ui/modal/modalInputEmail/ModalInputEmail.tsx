import { useTranslation } from '../../../hooks'
import { Modal } from '../Modal'
import { Button, Input } from '@/shared'

import s from './ModalInputEmail.module.scss'
type Props = {
  handleButtonClick: () => void
  isOpen: boolean
  onChange: (email: string) => void
  onClose: () => void
  value: string
}

export const ModalInputEmail = (props: Props) => {
  const { handleButtonClick, isOpen, onChange, onClose, value } = props

  const { t } = useTranslation()

  return (
    <Modal onClose={onClose} open={isOpen} title={t.modalInputEmail.title}>
      <Input inputIsSearch={false} onChangeValue={value => onChange(value)} value={value}></Input>
      <div className={s.button}>
        <Button onClick={handleButtonClick}>{t.modalInputEmail.button}</Button>
      </div>
    </Modal>
  )
}
