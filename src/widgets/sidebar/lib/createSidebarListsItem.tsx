import { Button } from '../../../shared/ui'
import { SidebarItemsType } from './useSidebarItems'
import Link from 'next/link'

type PropsType = {
  classNameButton: string
  classNameLink: string
  id: string
  items: SidebarItemsType
  key: string
  onClickHandler: () => void
}

export const createSidebarListsItem = ({
  classNameButton,
  classNameLink,
  id,
  items,
  key,
  onClickHandler,
}: PropsType) => {
  if (key === 'logout') {
    return (
      <Button className={classNameButton} onClick={onClickHandler} variant={'text'}>
        <div>{items[key as keyof typeof items].icon}</div>
        <div>{items[key as keyof typeof items].title}</div>
      </Button>
    )
  }

  if (key === 'myProfile') {
    return (
      <Link className={classNameLink} href={`${items[key as keyof typeof items].url}/${id}`}>
        <div>{items[key as keyof typeof items].icon}</div>
        <div>{items[key as keyof typeof items].title}</div>
      </Link>
    )
  }

  return (
    <Link className={classNameLink} href={items[key as keyof typeof items].url}>
      <div>{items[key as keyof typeof items].icon}</div>
      <div>{items[key as keyof typeof items].title}</div>
    </Link>
  )
}
