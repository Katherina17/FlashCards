import React, { useState } from 'react'

import ChervonDownIcon from '@/assets/svg/arrow-Down-outline.svg'
import ChervonUpIcon from '@/assets/svg/arrow-Up.svg'
import * as Select from '@radix-ui/react-select'

import s from './select.module.scss'

type PropsType = {
  disabled?: boolean
  label: string
  options: { label: string; value: any }[]
  placeholder?: string
}

export const CustomSelect = ({ disabled, label, options, placeholder }: PropsType) => {
  const [selectOpen, setSelectOpen] = useState(false)
  const ChevronIcon = selectOpen ? ChervonUpIcon : ChervonDownIcon

  return (
    <>
      <label className={`${s.label} ${disabled ? s.labelDisabled : s.label} `} htmlFor={'randomID'}>
        {label}
      </label>
      <Select.Root disabled={disabled} onOpenChange={setSelectOpen}>
        <Select.Trigger className={s.SelectTrigger} id={'randomID'}>
          <Select.Value placeholder={placeholder !== undefined ? placeholder : 'Select box..'} />
          <img alt={selectOpen ? 'arrow up' : 'arrow down'} src={ChevronIcon} />
        </Select.Trigger>
        <Select.Portal>
          <Select.Content className={s.SelectContent} position={'popper'}>
            <Select.Viewport className={s.SelectViewport}>
              {options.map(option => {
                return (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                )
              })}
              <Select.Separator className={s.SelectSeparator} />
            </Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </>
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
