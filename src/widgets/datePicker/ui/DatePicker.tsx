import { ComponentProps, FC, forwardRef, useState } from 'react'
import * as RDP from 'react-datepicker'
import { ReactDatePickerCustomHeaderProps, registerLocale } from 'react-datepicker'

import { CalendarIcon } from '@/shared/assets/svg'
// eslint-disable-next-line no-duplicate-imports
import { ArrowLeftIcon, ArrowRightIcon } from '@/shared/assets/svg'
import { CalendarDefault } from '@/shared/assets/svg/calendarIconDefault'
import { Label } from '@/shared/ui/label/Label'
import { clsx } from 'clsx'
import { format, isThisMonth, isToday } from 'date-fns'
import { enUS, ru } from 'date-fns/locale'

//don't touch this

import { isWeekend } from 'date-fns/fp'

import 'react-datepicker/dist/react-datepicker.min.css'

// eslint-disable-next-line perfectionist/sort-imports
import s from './DatePicker.module.scss'

const RDPC = (((RDP.default as any).default as any) ||
  (RDP.default as any) ||
  (RDP as any)) as typeof RDP.default

export type DatePickerProps = {
  disabled?: boolean
  endDate?: Date | null
  errorMessage?: string
  label?: string
  placeholder?: string
  setEndDate?: (date: Date | null) => void
  setStartDate: (date: Date | null) => void
  startDate: Date | null
} & ComponentProps<'div'>
registerLocale('ru', ru)

export const DatePicker: FC<DatePickerProps> = ({
  className,
  disabled,
  endDate,
  errorMessage,
  label,
  placeholder,
  setEndDate,
  setStartDate,
  startDate,
  ...rest
}) => {
  const isRange = endDate !== undefined
  const showError = !!errorMessage && errorMessage.length > 0

  const classNames = {
    calendar: s.calendar,
    day: (date: Date) => {
      const weekend = isWeekend(date) && s.weekend
      const dayClassName = `${s.day} ${weekend}`

      return dayClassName
    },
    errorText: s.errorText,
    input: clsx(s.input, showError && s.error, isRange && s.range),
    inputContainer: s.inputContainer,
    popper: s.popper,
    root: clsx(s.root, className),
  }

  const DatePickerHandler = (dates: [Date | null, Date | null] | Date) => {
    if (Array.isArray(dates)) {
      const [start, end] = dates

      setStartDate(start)
      setEndDate?.(end)
    } else {
      setStartDate(dates)
    }
  }

  return (
    <div className={classNames.root} {...rest}>
      <RDPC
        calendarClassName={classNames.calendar}
        calendarStartDay={1}
        customInput={<CustomInput disabled={disabled} label={label} />}
        dateFormat={'dd/MM/yyyy'}
        // dayClassName={classNames.day}
        disabled={disabled}
        endDate={endDate}
        formatWeekDay={formatWeekDay}
        locale={'en'}
        onChange={DatePickerHandler}
        placeholderText={placeholder}
        popperClassName={classNames.popper}
        popperModifiers={[
          {
            name: 'offset',
            options: {
              offset: [0, -11],
            },
          },
        ]}
        renderCustomHeader={CustomHeader}
        renderDayContents={CustomDay}
        selected={startDate}
        selectsRange={isRange}
        showPopperArrow={false}
        startDate={startDate}
      />
      {showError && <p className={classNames.errorText}>{errorMessage}</p>}
    </div>
  )
}

type CustomInputProps = {
  disabled?: boolean
  label?: string
}

const CustomInput = forwardRef<HTMLInputElement, CustomInputProps>(
  ({ disabled, label, ...rest }, ref) => {
    const [isActive, setIsActive] = useState<boolean>(false)
    const classNames = {
      icon: clsx(s.icon, disabled && s.disabled),
      input: clsx(s.input, isActive ? s.openInput : s.closedInput),
      inputContainer: s.inputContainer,
    }

    return (
      <Label label={label}>
        <div
          className={classNames.inputContainer}
          onBlur={() => setIsActive(false)}
          onFocus={() => setIsActive(true)}
        >
          <input
            {...rest}
            className={classNames.input}
            disabled={disabled}
            ref={ref}
            type={'text'}
          />
          <div className={classNames.icon}>{isActive ? <CalendarIcon /> : <CalendarDefault />}</div>
        </div>
      </Label>
    )
  }
)

const CustomHeader = ({ date, decreaseMonth, increaseMonth }: ReactDatePickerCustomHeaderProps) => {
  const classNames = {
    button: s.button,
    buttonBox: s.buttonBox,
    header: s.header,
  }

  const headerText = capitalizeFirstLetter(format(date, 'LLLL Y', { locale: enUS }))

  return (
    <div className={classNames.header}>
      <div>{headerText}</div>
      <div className={classNames.buttonBox}>
        <button className={classNames.button} onClick={decreaseMonth} type={'button'}>
          <ArrowLeftIcon />
        </button>

        <button className={classNames.button} onClick={increaseMonth}>
          <ArrowRightIcon />
        </button>
      </div>
    </div>
  )
}
const CustomDay = (dayOfMonth: number, date?: Date | undefined) => {
  const dayClassName = `${s.day} ${date && isWeekend(date) ? s.weekend : s.notWeekend} ${
    date && isToday(date) && s.today
  } `

  return <span className={dayClassName}>{dayOfMonth}</span>
}
const formatWeekDay = (day: string) => capitalizeFirstLetter(day.substring(0, 2))

const capitalizeFirstLetter = (text: string) => {
  return text[0].toUpperCase() + text.slice(1)
}
