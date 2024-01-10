import React, { ReactNode } from 'react'

import { Typography } from '..'
import { Close } from '../../assets/svg'
import * as Dialog from '@radix-ui/react-dialog'

import s from './modal.module.scss'
export type ModalSize = 'lg' | 'md' | 'sm'
export type ModalProps = {
  children?: ReactNode
  onClose: () => void
  open: boolean
  showCloseButton?: boolean
  size?: ModalSize
  title: ReactNode
}

export const Modal = ({
  children,
  onClose,
  open = false,
  showCloseButton = true,
  size = 'sm',
  title,
}: ModalProps) => {
  let className

  switch (size) {
    case 'sm':
      className = s.sm
      break
    case 'md':
      className = s.md
      break
    case 'lg':
      className = s.lg
      break
    default:
      break
  }

  return (
    <Dialog.Root onOpenChange={onClose} open={open}>
      <Dialog.Portal>
        <Dialog.Overlay className={s.overlay} />
        <Dialog.Content className={`${s.content} ${className}`}>
          <Dialog.Title asChild className={s.title}>
            <div>
              <Typography variant={'h1'}>{title}</Typography>
              {showCloseButton && (
                <Dialog.Close asChild className={s.close}>
                  <Close></Close>
                </Dialog.Close>
              )}
            </div>
          </Dialog.Title>
          <div className={s.main}>{children}</div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
