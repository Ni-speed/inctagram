import { Typography } from '@/shared/ui'
import { Select } from '@/shared/ui/select'

import styles from './PerPageSelect.module.scss'

export type PerPageSelectProps = {
  onPerPageChange: (itemPerPage: number | string) => void
  perPage: number | string
  perPageOptions: number[]
}

export const PerPageSelect = ({ onPerPageChange, perPage, perPageOptions }: PerPageSelectProps) => {
  const selectOptions = perPageOptions.map(value => ({
    label: value.toString(),
    value: value.toString(),
  }))

  return (
    <div className={styles.selectBox}>
      <Typography variant={'regularText14'}>Show</Typography>
      <Select
        className={styles.select}
        onChange={onPerPageChange}
        options={selectOptions}
        value={perPage.toString()}
        variant={'pagination'}
      />
      <Typography variant={'regularText14'}>on page</Typography>
    </div>
  )
}
