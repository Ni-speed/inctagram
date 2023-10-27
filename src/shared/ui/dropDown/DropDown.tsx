import { ReactNode, useState } from 'react'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import s from './dropDown.module.scss'

export type DropDownProps = {
  items: ReactNode[]
  modal?: boolean
  trigger?: ReactNode
}

export const DropDown = ({ items, modal, trigger }: DropDownProps) => {
  const [open, setOpen] = useState(false)

  return (
    <DropdownMenu.Root defaultOpen modal={modal} onOpenChange={setOpen} open={open}>
      <DropdownMenu.Trigger asChild>{trigger}</DropdownMenu.Trigger>
      <DropdownMenu.Content className={s.content} loop sideOffset={4}>
        {items.map((item, index) => {
          return (
            <DropdownMenu.Item className={s.item} key={index}>
              {item}
            </DropdownMenu.Item>
          )
        })}
        <DropdownMenu.Arrow
          className={s.arrow}
          height={8}
          stroke={'#4C4C4C'}
          stroke-width={'1'}
          width={15}
        />
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  )
}
