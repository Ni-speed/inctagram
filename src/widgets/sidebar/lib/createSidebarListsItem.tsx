import { SidebarItemsType } from './useSidebarItems'
import { Undefineable } from '@/shared'
import { Button, Typography } from '@/shared/ui'
import Link from 'next/link'

import s from './../ui/sidebar.module.scss'

type PropsType = {
  items: SidebarItemsType
  key: string
  onClickCreateHandler: () => void
  onClickLogoutHandler: () => void
  userName: Undefineable<string>
}

export const CreateSidebarListsItem = ({
  items,
  key,
  onClickCreateHandler,
  onClickLogoutHandler,
  userName,
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
            pathname: `${items[key as keyof typeof items].url}/[userName]`,
            query: { userName },
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
