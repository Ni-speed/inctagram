import { createContext } from 'react'

type ContextType = {
  changeSlide: (direction?: number) => void
  goToSlide: (number: number) => void
  items: { title: string; url: string }[]
  slideNumber: number
  slidesCount: number
}

export const SliderContext = createContext<ContextType>({
  changeSlide: (direction?: number | undefined) => {},
  goToSlide: (number: number) => {},
  items: [{ title: '', url: '' }],
  slideNumber: 0,
  slidesCount: 0,
})
