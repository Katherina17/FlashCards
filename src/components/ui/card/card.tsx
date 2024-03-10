import { ComponentPropsWithoutRef, ElementType } from 'react'

import s from './card.module.scss'

export type CardProps<T extends ElementType> = {
  //нужно ограничить тип
  as?: T
  className?: string
  variant?: 'primary'
} & ComponentPropsWithoutRef<T> //get the default props of element (onClick, disabled..)

export const Card = <T extends ElementType>(props: CardProps<T>) => {
  const { as: Component = 'div', className, variant = 'primary', ...rest } = props

  return <Component className={`${s.div} ${s[variant]}  ${className}`} {...rest} />
}
