import { ReactNode } from 'react'

import * as Tabs from '@radix-ui/react-tabs'

import s from './tabs.module.scss'

type PropsType = {
  children?: ReactNode
  disable?: boolean
  label: string
  orientation: 'horizontal' | 'vertical'
  variant: 'emptyLeft' | 'emptyLeftBorderRight' | 'leftBorder' | 'primary' | 'rightBorder'
}
export const CustomTabs = ({ children, disable, label, orientation, variant }: PropsType) => {
  return (
    <>
      <Tabs.Root defaultValue={label} orientation={orientation}>
        <Tabs.List>
          <Tabs.Trigger className={`${s.tabs} ${s[variant]}`} disabled={disable} value={label}>
            {label}
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value={label}>{children}</Tabs.Content>
      </Tabs.Root>
    </>
  )
}
