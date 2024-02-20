import * as Slider from '@radix-ui/react-slider'

import s from './zoomMenu.module.scss'
type PropsType = {
  onChange: (value: Array<number>) => void
  value: Array<number>
}
export const ZoomMenu = ({ onChange, value }: PropsType) => {
  return (
    <div className={s.zoomMenu}>
      <Slider.Root
        className={s.root}
        max={2}
        min={0.1}
        onValueChange={onChange}
        step={0.05}
        value={value}
      >
        <Slider.Track className={s.track}>
          <Slider.Range className={s.range}></Slider.Range>
        </Slider.Track>
        <Slider.Thumb className={s.thumb} />
      </Slider.Root>
    </div>
  )
}
