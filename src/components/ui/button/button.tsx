import { ComponentPropsWithoutRef, ElementType } from 'react'

import s from './button.module.scss'

export type ButtonProps<T extends ElementType> = {
  //нужно ограничить тип
  as?: T
  fullWidth?: boolean
  variant?: 'link' | 'primary' | 'secondary' | 'tertiary'
} & ComponentPropsWithoutRef<T> //get the default props of element (onClick, disabled..)

export const Button = <T extends ElementType>(props: ButtonProps<T>) => {
  const { as: Component = 'button', className, fullWidth, variant = 'primary', ...rest } = props

  return (
    <Component
      className={`${s.button} ${s[variant]} ${fullWidth ? s.fullWidth : ''} ${className}`}
      {...rest}
    />
  )
}
