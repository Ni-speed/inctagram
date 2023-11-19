import { ArrowRightIcon } from '@/shared/assets/svg/'

import styles from './ControlButton.module.scss'

type NavigationButtonProps = {
  disabled?: boolean
  onClick: () => void
}

export const PrevButton = ({ disabled, onClick }: NavigationButtonProps) => {
  return (
    <button className={styles.item} disabled={disabled} onClick={onClick}>
      <ArrowRightIcon className={styles.icon} height={16} width={16} />
    </button>
  )
}
