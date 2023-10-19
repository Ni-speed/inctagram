import { Typography } from '@/shared/ui'
import { clsx } from 'clsx'

import styles from './PageButton.module.scss'

type PageButtonProps = {
  disabled?: boolean
  onClick: () => void
  page: number
  selected: boolean
}

export const PageButton = ({ disabled, onClick, page, selected }: PageButtonProps) => {
  const classNames = {
    item: styles.item,
    pageButton(selected?: boolean) {
      return clsx(this.item, selected && styles.selected)
    },
  }

  return (
    <button
      className={classNames.pageButton(selected)}
      disabled={selected || disabled}
      onClick={onClick}
    >
      <Typography className={styles.text} variant={'regularText14'}>
        {page}
      </Typography>
    </button>
  )
}
