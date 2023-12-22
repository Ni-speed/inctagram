import { SidebarItemsType } from './useSidebarItems'
import { Undefineable } from '@/shared'
import { Button, Typography } from '@/shared/ui'
import Link from 'next/link'

import s from './../ui/sidebar.module.scss'

type PropsType = {
  id: Undefineable<string>
  items: SidebarItemsType
  key: string
  onClickHandler: () => void
}

export const createSidebarListsItem = ({ id, items, key, onClickHandler }: PropsType) => {
  if (key === 'logout') {
    return (
      <li className={s.itemWrapper} key={key}>
        <Button className={s.button} onClick={onClickHandler} variant={'text'}>
          <div>{items[key as keyof typeof items].icon}</div>
          <div>
            <Typography className={s.text} variant={'mediumText14'}>
              {items[key as keyof typeof items].title}
            </Typography>
          </div>
        </Button>
      </li>
    )
  }

  if (key === 'myProfile') {
    return (
      <li className={s.itemWrapper} key={key}>
        <Link
          className={s.item}
          href={{
            pathname: `${items[key as keyof typeof items].url}/[id]`,
            query: { id },
          }}
        >
          <div>{items[key as keyof typeof items].icon}</div>
          <div>
            <Typography className={s.text} variant={'mediumText14'}>
              {items[key as keyof typeof items].title}
            </Typography>
          </div>
        </Link>
      </li>
    )
  }

  return (
    <li className={s.itemWrapper} key={key}>
      <Link className={s.item} href={items[key as keyof typeof items].url}>
        <div>{items[key as keyof typeof items].icon}</div>
        <div>
          <Typography className={s.text} variant={'mediumText14'}>
            {items[key as keyof typeof items].title}
          </Typography>
        </div>
      </Link>
    </li>
  )
}
