import { CSSProperties, ComponentPropsWithoutRef, JSXElementConstructor, ReactElement } from 'react'

import { ArrowDownIcon } from '@/shared/assets/svg/arrowDownIcon'
import * as SelectRadix from '@radix-ui/react-select'
import { clsx } from 'clsx'

import s from './Select.module.scss'

export type Option = {
  label: ReactElement | string
  value: string
}

type Props = {
  label?: string
  onBlur?: () => void
  onChange: (value: string) => void
  open?: boolean
  options: Option[]
  placeholder?: ReactElement | string
  rootClassName?: string
  value: ReactElement | string
  variant?: 'language' | 'pagination' | 'primary'
  width?: CSSProperties['width']
}
export type SelectProps = Omit<ComponentPropsWithoutRef<'select'>, keyof Props> & Props
export const Select = (props: SelectProps) => {
  const {
    className,
    disabled,
    label,
    onBlur,
    onChange,
    open,
    options,
    placeholder,
    rootClassName,
    value,
    variant = 'primary',
    width,
  } = props
  const IconSize = {
    Large: 24,
    Small: 16,
  } as const

  const classNames = {
    content: clsx(s.content, s[variant]),
    icon: clsx(s.icon, s[variant]),
    item: clsx(s.item, s[variant]),
    label: clsx(s.label, disabled && s.disabled),
    root: rootClassName,
    trigger: clsx(s.trigger, s[variant], className),
  }
  //const withoutPlaceholder = variant === 'pagination' ? value : 'Select Box'
  const rootStyles = { width }
  const onChangeHandler = (value: string) => {
    //console.log('onChangeHandler', value)
    onChange(value)
  }

  //console.log('value', value)

  return (
    <div className={classNames.root}>
      <SelectRadix.Group>
        <SelectRadix.Label className={classNames.label}>{label}</SelectRadix.Label>
        <SelectRadix.Root
          disabled={disabled}
          onValueChange={onChangeHandler}
          open={open}
          value={'value' as string}
        >
          <SelectRadix.Trigger className={classNames.trigger} onBlur={onBlur} style={rootStyles}>
            <SelectRadix.Value>{value}</SelectRadix.Value>
            <SelectRadix.Icon className={classNames.icon}>
              <ArrowDownIcon size={variant === 'pagination' ? IconSize.Small : IconSize.Large} />
            </SelectRadix.Icon>
          </SelectRadix.Trigger>

          <SelectRadix.Portal>
            <SelectRadix.Content className={classNames.content} position={'popper'}>
              <SelectRadix.Viewport>
                {options.map(option => {
                  return (
                    <SelectRadix.Item
                      asChild
                      className={classNames.item}
                      key={`${option.value}`}
                      value={option.label}
                    >
                      {<span>{option.label}</span>}
                    </SelectRadix.Item>
                  )
                })}
              </SelectRadix.Viewport>
            </SelectRadix.Content>
          </SelectRadix.Portal>
        </SelectRadix.Root>
      </SelectRadix.Group>
    </div>
  )
}
