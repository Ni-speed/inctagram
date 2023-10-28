import React, { ChangeEvent, ComponentPropsWithoutRef, useState } from 'react'

import { EyeSvg, SearchSvg } from '../../assets/svg'
import { Label, Typography } from '@/shared/ui'
import { clsx } from 'clsx'

import s from './Input.module.scss'

export type InputProps = {
  className?: string
  classNameWrapper?: string
  disabled?: boolean
  errorMessage?: string
  inputIsSearch: boolean
  inputName?: string
  inputType?: 'password' | 'text'
  label?: string
  onChangeValue?: (e: string) => void
  value: string
} & ComponentPropsWithoutRef<'input'>

export const Input = (
  props: InputProps & Omit<ComponentPropsWithoutRef<'input'>, keyof InputProps>
) => {
  const {
    className,
    classNameWrapper,
    disabled,
    errorMessage = false,
    inputIsSearch,
    inputType = 'text',
    label,
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
    <div className={`${s.internalBlock} ${classNameWrapper}`}>
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
            className={styleNameForInput}
            disabled={disabled}
            onChange={onChangeHandler}
            placeholder={props.placeholder}
            type={internalInput}
            value={props.value}
          />
          {inputIsPassword && (
            <button className={s.showPasswordButton} onClick={onClickHandler} type={'button'}>
              <EyeSvg className={clsx(disabled ? s.disabledProps : s.eyeSVG)} />
            </button>
          )}
        </div>
      </Label>
      {showError && <div className={s.errorText}>{errorMessage}</div>}
    </div>
  )
}
