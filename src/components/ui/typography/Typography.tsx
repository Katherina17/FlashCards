import { ComponentPropsWithoutRef, ElementType } from 'react'

import s from './Typography.module.scss'

export type TypographyProps<T extends ElementType> = {
  //нужно ограничить тип
  as?: T
  variant?:
    | 'body1'
    | 'body2'
    | 'caption'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'link1'
    | 'link2'
    | 'overline'
    | 'subtitle1'
    | 'subtitle2'
} & ComponentPropsWithoutRef<T> //get the default props of element (onClick, disabled..)

export const Typography = <T extends ElementType>(props: TypographyProps<T>) => {
  const { as: Component = 'p', className, variant = 'body1', ...rest } = props

  return <Component className={`${s[variant]} ${className}`} {...rest} />
}
