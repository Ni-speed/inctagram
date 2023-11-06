import React, { ChangeEvent, ComponentPropsWithoutRef, useState } from 'react'

import { EyeSvg, SearchSvg } from '../../assets/svg'
import { CloseEyeSvg } from '@/shared/assets/svg/inputSvg'
import { Label, Typography } from '@/shared/ui'
import { clsx } from 'clsx'

import s from './Input.module.scss'

export type InputProps = {
  autoComplete?: string
  className?: string
  classNameError?: boolean | string
  classNameWrapper?: string
  disabled?: boolean
  errorMessage?: string
  inputIsSearch: boolean
  inputName?: string
  inputType?: 'email' | 'password' | 'text'
  label?: string
  onChangeValue?: (e: string) => void
  value: string
} & ComponentPropsWithoutRef<'input'>

export const Input = (
  props: InputProps & Omit<ComponentPropsWithoutRef<'input'>, keyof InputProps>
) => {
  const {
    autoComplete,
    className,
    classNameError,
    classNameWrapper,
    disabled,
    errorMessage = false,
    inputIsSearch,
    inputType = 'text',
    label,
    onBlur,
    onChangeValue,
  } = props

  const [internalInput, setInternalInput] = useState<string>(inputType)
  const inputIsPassword = inputType === 'password'
  const showError = errorMessage && errorMessage.length > 0

  const inputClassName = {
    passwordInput: clsx(s.inputPassword, showError && s.error, className),
    searchInput: clsx(s.inputSearch, showError && s.error, className),
    standardInput: clsx(s.inputStandard, showError && s.error, className),
  }

  function getStyleNameForInput(isPassword: boolean, isSearch: boolean) {
    if (isPassword) {
      return inputClassName.passwordInput
    } else if (isSearch) {
      return inputClassName.searchInput
    } else {
      return inputClassName.standardInput
    }
  }

  const styleNameForInput = getStyleNameForInput(inputIsPassword, inputIsSearch)

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue: string = e.target.value

    onChangeValue && onChangeValue(newValue)
  }

  const onClickHandler = () => {
    inputIsPassword &&
      setInternalInput(previousValue => (previousValue === 'password' ? 'text' : 'password'))
  }

  return (
    <div className={clsx(s.internalBlock, classNameWrapper)}>
      {props.inputName && !inputIsSearch && (
        <Typography
          className={clsx(s.inputName, disabled && s.disabledProps)}
          variant={'regularText14'}
        >
          {props.inputName}
        </Typography>
      )}
      <Label label={label && label}>
        <div className={s.inputContainer}>
          {inputIsSearch && (
            <button className={s.searchButton} type={'button'}>
              <SearchSvg
                className={clsx(
                  errorMessage && s.searchSvgError,
                  disabled ? s.disabledProps : s.searchSVG
                )}
              />
            </button>
          )}
          <input
            autoComplete={autoComplete}
            className={styleNameForInput}
            disabled={disabled}
            onBlur={onBlur}
            onChange={onChangeHandler}
            placeholder={props.placeholder}
            type={internalInput}
            value={props.value}
          />
          {inputIsPassword && (
            <button
              className={s.showPasswordButton}
              disabled={disabled}
              onClick={onClickHandler}
              type={'button'}
            >
              {internalInput === 'password' ? (
                <EyeSvg className={clsx(disabled ? s.disabledProps : s.eyeSVG)} />
              ) : (
                <CloseEyeSvg className={clsx(disabled ? s.disabledProps : s.eyeSVG)} />
              )}
            </button>
          )}
        </div>
      </Label>
      {showError && (
        <div className={clsx(s.errorText, classNameError ? s.errorIndent : '')}>{errorMessage}</div>
      )}
    </div>
  )
}
