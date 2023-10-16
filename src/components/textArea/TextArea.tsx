import { ChangeEvent, ComponentPropsWithoutRef, KeyboardEvent, forwardRef } from 'react'

import { Typography } from '../typography/Typography'

import s from './textArea.module.scss'

export type TextFieldProps = {
  className?: string
  error?: string
  errorMessage?: string
  label?: string
  onChangeValue?: (value: string) => void
  onClearClick?: () => void
  onEnter?: ComponentPropsWithoutRef<'textarea'>['onKeyDown']
  onLeftIconClickHandler?: () => void
  onRightIconClickHandler?: () => void
  search?: boolean
} & ComponentPropsWithoutRef<'textarea'>

export const TextArea = forwardRef<HTMLTextAreaElement, TextFieldProps>((props, ref) => {
  const {
    disabled,
    error,
    errorMessage,
    label,
    onChange,
    onChangeValue,
    onClearClick,
    onEnter,
    onKeyDown,
    onLeftIconClickHandler,
    onRightIconClickHandler,
    search = false,
    ...rest
  } = props

  const onChangeValueHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    onChange?.(e)
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
        className={`${s.inputContainer} ${errorMessage ? s.error : ''} ${disabled && s.disabled}`}
      >
        <textarea
          className={`${s.input} ${error ? s.error : ''}`}
          disabled={disabled}
          onChange={onChangeValueHandler}
          onKeyDown={onKeyPressHandler}
          ref={ref}
          {...rest}
        />
      </div>
      <Typography as={'div'} className={s.error} variant={'regularText14'}>
        {errorMessage}
      </Typography>
    </div>
  )
})
