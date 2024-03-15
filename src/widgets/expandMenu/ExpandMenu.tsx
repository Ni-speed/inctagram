import s from './expandMenu.module.scss'

import { ImageOutline, Typography, useTranslation } from '../../shared'
type PropsType = {
  onChange: (aspect: number) => void
  value: number
}
export const ExpandMenu = ({ onChange, value }: PropsType) => {
  const { t } = useTranslation()

  return (
    <div className={s.expandMenu}>
      <div>
        <input
          className={`${s.input} `}
          defaultChecked
          id={'original'}
          name={'expand'}
          onChange={aspect => onChange(+aspect.currentTarget.value)}
          type={'radio'}
          value={NaN}
        />
        <label className={s.itemContainer} htmlFor={'original'}>
          <Typography
            className={`${!Number.isNaN(value) && s.unchecked}`}
            variant={`${Number.isNaN(value) ? 'h3' : 'regularText16'}`}
          >
            {t.modalAddPost.button.original}
          </Typography>
          <ImageOutline
            className={`${s.imageIcon} ${!Number.isNaN(value) && s.unchecked}`}
          ></ImageOutline>
        </label>
      </div>
      <div>
        <input
          className={s.input}
          id={'1:1'}
          name={'expand'}
          onChange={aspect => onChange(+aspect.currentTarget.value)}
          type={'radio'}
          value={1}
        />
        <label className={s.itemContainer} htmlFor={'1:1'}>
          <Typography
            className={`${value !== 1 && s.unchecked}`}
            variant={`${value === 1 ? 'h3' : 'regularText16'}`}
          >
            1:1
          </Typography>
          <div className={`${s.oneByOne} ${s.quadrilateral} ${value !== 1 && s.unchecked}`}></div>
        </label>
      </div>
      <div>
        <input
          className={s.input}
          id={'4:5'}
          name={'expand'}
          onChange={aspect => onChange(+aspect.currentTarget.value)}
          type={'radio'}
          value={4 / 5}
        />
        <label className={s.itemContainer} htmlFor={'4:5'}>
          <Typography
            className={`${value !== 4 / 5 && s.unchecked}`}
            variant={`${value === 4 / 5 ? 'h3' : 'regularText16'}`}
          >
            4:5
          </Typography>
          <div
            className={`${s.fourByFive} ${s.quadrilateral} ${value !== 4 / 5 && s.unchecked}`}
          ></div>
        </label>
      </div>
      <div>
        <input
          className={s.input}
          id={'16:9'}
          name={'expand'}
          onChange={aspect => onChange(+aspect.currentTarget.value)}
          type={'radio'}
          value={16 / 9}
        />
        <label className={s.itemContainer} htmlFor={'16:9'}>
          <Typography
            className={`${value !== 16 / 9 && s.unchecked}`}
            variant={`${value === 16 / 9 ? 'h3' : 'regularText16'}`}
          >
            16:9
          </Typography>
          <div
            className={`${s.quadrilateral} ${s.sixteenByNine} ${value !== 16 / 9 && s.unchecked}`}
          ></div>
        </label>
      </div>
    </div>
  )
}
