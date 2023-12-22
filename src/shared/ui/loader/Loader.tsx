import LoadingGif from '@/../public/image/loading.gif'
import { clsx } from 'clsx'
import Image from 'next/image'

import s from './Loader.module.scss'

type LoaderProps = {
  className?: string
}

export const Loader = ({ className }: LoaderProps) => {
  const classNames = {
    loader: clsx(s.loader, className),
  }

  return (
    <div className={classNames.loader}>
      <Image alt={'Loading...'} height={40} src={LoadingGif} width={40} />
    </div>
  )
}
