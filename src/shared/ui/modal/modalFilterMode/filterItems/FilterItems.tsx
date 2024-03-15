import Image from 'next/image'

import s from './FilterItems.module.scss'

import { Typography } from '../../..'
import { filters } from '../../../../constans/photoFilters'

type IProps = {
  image: string
  setFilter: (filter: string) => void
}

export const FilterItems = ({ image, setFilter }: IProps) => {
  const filterItems = filters.map((filter: string) => {
    return (
      <div
        className={s.itemContainer}
        key={filter}
        onClick={() => {
          setFilter(filter)
        }}
      >
        <Image
          alt={'photo'}
          className={`${filter} ${s.image}`}
          height={108}
          src={image}
          width={108}
        ></Image>
        <div className={s.nameFilter}>
          <Typography variant={'regularText16'}>
            {filter[0].toUpperCase().concat(filter.slice(1))}
          </Typography>
        </div>
      </div>
    )
  })

  return <>{filterItems}</>
}
