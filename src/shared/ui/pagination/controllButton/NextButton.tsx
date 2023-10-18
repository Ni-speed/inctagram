import { ArrowLeftIcon } from '@/shared/assets/svg/'

import styles from './ControlButton.module.scss'

type NavigationButtonProps = {
  disabled?: boolean
  onClick: () => void
}
export const NextButton = ({ disabled, onClick }: NavigationButtonProps) => {
  return (
    <button className={styles.item} disabled={disabled} onClick={onClick}>
      <ArrowLeftIcon className={styles.icon} height={16} width={16} />
    </button>
  )
}
