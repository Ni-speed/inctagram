import { useSelector } from 'react-redux'

import { useAppDispatch } from '../../../app'
import { RootState } from '../../../app/appStore'
import { setCurrentPhoto } from '../../../entities'
import { ArrowLeftIcon, ArrowRightIcon, Button } from '../../../shared'

import s from './controlButtons.module.scss'

export const ControlButtons = ({}) => {
  const currentImage = useSelector((state: RootState) => state.photos.currentPhoto)
  const photos = useSelector((state: RootState) => state.photos.photos)
  const dispatch = useAppDispatch()

  return (
    <>
      <Button className={`${s.arrow} ${s.leftArrow}`} onClick={() => {}} variant={'text'}>
        <ArrowLeftIcon height={'28px'} viewBox={'0 0 9 9'} width={'20px'}></ArrowLeftIcon>
      </Button>
      <Button className={`${s.arrow} ${s.rightArrow}`} onClick={() => {}} variant={'text'}>
        <ArrowRightIcon height={'28px'} viewBox={'0 0 9 9'} width={'20px'}></ArrowRightIcon>
      </Button>
      <div className={s.dots}>
        {photos.map(photo => {
          return (
            <div
              className={`${currentImage.id === photo.id ? s.currentDot : s.notCurrentDot} ${
                s.dot
              }`}
              key={photo.id}
              onClick={() => dispatch(setCurrentPhoto({ id: photo.id }))}
            ></div>
          )
        })}
      </div>
    </>
  )
}
