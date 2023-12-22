import { ChangeEvent, ComponentPropsWithoutRef, KeyboardEvent, forwardRef } from 'react'

import { Typography } from '@/shared/ui/typography/Typography'

import s from './textArea.module.scss'

export type TextFieldProps = {
  className?: string
  error?: string
  errorMessage?: string
  label?: string
  onBlur?: () => void
  onChangeValue?: (value: string) => void
  onClearClick?: () => void
  onEnter?: ComponentPropsWithoutRef<'textarea'>['onKeyDown']
  onLeftIconClickHandler?: () => void
  onRightIconClickHandler?: () => void
  search?: boolean
  value: string | undefined
} & ComponentPropsWithoutRef<'textarea'>

export const TextArea = forwardRef<HTMLTextAreaElement, TextFieldProps>((props, ref) => {
  const {
    disabled,
    error,
    errorMessage,
    label,
    onBlur,
    onChange,
    onChangeValue,
    onClearClick,
    onEnter,
    onKeyDown,
    onLeftIconClickHandler,
    onRightIconClickHandler,
    search = false,
    value,
    ...rest
  } = props

  const onChangeValueHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    onChange?.(e)
    console.log(e.currentTarget.value)
    onChangeValue?.(e.currentTarget.value)
  }
  const onKeyPressHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.code === 'Enter') {
      onEnter?.(e)
    }
    onKeyDown?.(e)
  }

  return (
    <div className={s.root}>
      <Typography
        as={'label'}
        className={`${s.label} ${disabled && s.disabled}`}
        variant={'regularText14'}
      >
        {label}
      </Typography>
      <div
        className={`${s.textAreaContainer} ${errorMessage ? s.errorInTextArea : ''} ${
          disabled && s.disabled
        }`}
      >
        <textarea
          className={`${s.textArea} ${error ? s.error : ''}`}
          disabled={disabled}
          onBlur={onBlur}
          onChange={onChangeValueHandler}
          onKeyDown={onKeyPressHandler}
          ref={ref}
          value={value}
          {...rest}
        />
      </div>
      <Typography as={'div'} className={s.error} variant={'regularText14'}>
        {errorMessage}
      </Typography>
    </div>
  )
})
