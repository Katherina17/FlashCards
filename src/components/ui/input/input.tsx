import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import { clsx } from 'clsx'

import s from './input.module.scss'

export type InputProps<T extends ElementType> = {
  children?: ReactNode
  disable?: boolean
  error?: null | string
  label?: string
  placeholder?: string
  variant?: 'password' | 'search' | 'text'
} & ComponentPropsWithoutRef<T> //get the default props of element (onClick, disabled..)

export const Input = <T extends ElementType>(props: InputProps<T>) => {
  const { children, className, error, label, placeholder, variant = 'text', ...rest } = props

  return (
    <>
      {label && <label className={s.label}> {label} </label>}
      <input
        className={clsx(s.input, s[variant], className, {
          [s.errorInput]: error !== null && error,
        })}
        {...rest}
        disabled={props.disable}
        placeholder={placeholder}
      />
      {error !== null && error && <span className={s.errorText}> {error} </span>}
      {children}
    </>
  )
}
