import { memo } from 'react'

import { usePagination } from '@/shared/hooks'
import { NextButton } from '@/shared/ui/pagination/controllButton/NextButton'
import { PrevButton } from '@/shared/ui/pagination/controllButton/PrevButton'
import { MainPaginationButton } from '@/shared/ui/pagination/mainPaginationButtons/MainPaginationButton'
import { PerPageSelect } from '@/shared/ui/pagination/perPageSelect/PerPageSelect'

import styles from './Pagination.module.scss'

type PaginationPropsType = {
  count: number
  onChange: (page: number) => void
  onPerPageChange?: (itemPerPage: number | string) => void // change from number
  page: number
  perPage?: number | string // no perPage, no select
  perPageOptions?: number[] // array points in select
  siblings?: number
}

export const Pagination = memo(
  ({
    count,
    onChange,
    onPerPageChange,
    page,
    perPage,
    perPageOptions,
    siblings,
  }: PaginationPropsType) => {
    const {
      handleMainPageClicked,
      handleNextPageClicked,
      handlePreviousPageClicked,
      isFirstPage,
      isLastPage,
      paginationRange,
    } = usePagination({
      count,
      onChange,
      page,
      siblings,
    })
    const showPerPageSelect = !!perPage && !!perPageOptions && !!onPerPageChange

    return (
      <div className={styles.main}>
        <div className={styles.numbers}>
          <PrevButton disabled={isFirstPage} onClick={handlePreviousPageClicked} />
          <MainPaginationButton
            currentPage={page}
            onClick={handleMainPageClicked}
            paginationRange={paginationRange}
          />
          <NextButton disabled={isLastPage} onClick={handleNextPageClicked} />
        </div>
        {showPerPageSelect && (
          <PerPageSelect
            {...{
              onPerPageChange,
              perPage,
              perPageOptions,
            }}
          />
        )}
      </div>
    )
  }
)
