import { SidebarItemsType } from './useSidebarItems'
import { Undefineable } from '@/shared'
import { Button, Typography } from '@/shared/ui'
import Link from 'next/link'

import s from './../ui/sidebar.module.scss'

type PropsType = {
  id: Undefineable<string>
  items: SidebarItemsType
  key: string
  onClickCreateHandler: () => void
  onClickLogoutHandler: () => void
}

export const CreateSidebarListsItem = ({
  id,
  items,
  key,
  onClickCreateHandler,
  onClickLogoutHandler,
}: PropsType) => {
  if (key === 'logout') {
    return (
      <li className={s.itemWrapper} key={key}>
        <Button className={s.button} onClick={onClickLogoutHandler} variant={'text'}>
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

  if (key === 'create') {
    return (
      <li className={s.itemWrapper} key={key}>
        <Button className={s.button} onClick={onClickCreateHandler} variant={'text'}>
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
