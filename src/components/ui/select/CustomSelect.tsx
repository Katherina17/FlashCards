import React, { useState } from 'react'

import ChervonDownIcon from '@/assets/svg/arrow-Down-outline.svg'
import ChervonUpIcon from '@/assets/svg/arrow-Up.svg'
import * as Select from '@radix-ui/react-select'

import s from './select.module.scss'

type PropsType = {
  placeholder?: string
}

export const CustomSelect = ({ placeholder }: PropsType) => {
  const [selectOpen, setSelectOpen] = useState(false)
  const ChevronIcon = selectOpen ? ChervonUpIcon : ChervonDownIcon

  return (
    <Select.Root onOpenChange={setSelectOpen}>
      <Select.Trigger className={s.SelectTrigger}>
        <Select.Value placeholder={placeholder !== undefined ? placeholder : 'Select box..'} />
        <img alt={selectOpen ? 'arrow up' : 'arrow down'} src={ChevronIcon} />
      </Select.Trigger>
      <Select.Portal>
        <Select.Content className={s.SelectContent}>
          <Select.ScrollUpButton className={s.SelectScrollButton} />

          <Select.Viewport className={s.SelectViewport}>
            <SelectItem value={'befed'}>Beef</SelectItem>
            <SelectItem value={'tgtg'}>Chicken</SelectItem>
            <SelectItem value={'erge'}>Lamb</SelectItem>
            <SelectItem value={'ver'}>Pork</SelectItem>
            <Select.Separator className={s.SelectSeparator} />
          </Select.Viewport>

          <Select.ScrollDownButton className={s.SelectScrollButton} />
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  )
}

type SelectItemType = {
  children: React.ReactNode
  className?: string
  value: string
} & React.HTMLAttributes<HTMLDivElement>

const SelectItem = React.forwardRef<HTMLDivElement, SelectItemType>(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <Select.Item className={s.SelectItem} {...props} ref={forwardedRef}>
        <Select.ItemText>{children}</Select.ItemText>
        <Select.ItemIndicator className={'SelectItemIndicator'} />
      </Select.Item>
    )
  }
)
