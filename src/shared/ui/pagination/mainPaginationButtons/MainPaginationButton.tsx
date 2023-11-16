import { PageButton } from '@/shared/ui/pagination/pageButton/PageButton'

import styles from './MainPaginationButton.module.scss'

type MainPaginationButtonsProps = {
  currentPage: number
  onClick: (pageNumber: number) => () => void
  paginationRange: (number | string)[]
}

export const MainPaginationButton = ({
  currentPage,
  onClick,
  paginationRange,
}: MainPaginationButtonsProps) => {
  return (
    <>
      {paginationRange.map((page: number | string, index) => {
        const isSelected = page === currentPage

        if (typeof page !== 'number') {
          return (
            <span className={styles.dots} key={index}>
              &#8230;
            </span>
          )
        }

        return <PageButton key={index} onClick={onClick(page)} page={page} selected={isSelected} />
      })}
    </>
  )
}
