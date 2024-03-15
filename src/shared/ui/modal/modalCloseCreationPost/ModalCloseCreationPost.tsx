import { Modal } from '..'
import { Button, Typography, useTranslation } from '@/shared'

import s from './modalCloseCreationPost.module.scss'
type Props = {
  buttonHandler: () => void
  onClose: () => void
  open: boolean
}

export const ModalCloseCreationPost = ({ buttonHandler, onClose, open }: Props) => {
  const { t } = useTranslation()

  return (
    <Modal onClose={onClose} open={open} showCloseButton title={t.modalAddPost.titleCloseCreation}>
      <div>
        <Typography variant={'regularText16'}>{t.modalAddPost.textOne}</Typography>
        <br></br>
        <Typography variant={'regularText16'}>{t.modalAddPost.textTwo}</Typography>
        <div className={s.buttonContainer}>
          <Button onClick={onClose} variant={'outline'}>
            <Typography variant={'regularText16'}>{t.modalAddPost.button.discard}</Typography>
          </Button>
          <Button onClick={buttonHandler}>
            <Typography variant={'regularText16'}>{t.modalAddPost.button.saveDraft}</Typography>
          </Button>
        </div>
      </div>
    </Modal>
  )
}
