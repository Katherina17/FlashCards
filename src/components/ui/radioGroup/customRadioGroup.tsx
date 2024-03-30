import { useState } from 'react'

import * as RadioGroup from '@radix-ui/react-radio-group'

import s from './customRadioGroup.module.scss'

type PropsType = {
  disabled?: boolean
  options: { label: string; value: any }[]
}

export const CustomRadioGroup = ({ disabled, options }: PropsType) => {
  const [isDisabled, setIsDisabled] = useState(disabled)

  return (
    <form style={{ alignItems: 'center', display: 'flex', gap: '1px' }}>
      <RadioGroup.Root
        aria-label={'View density'}
        className={s.RadioGroupRoot}
        disabled={isDisabled}
      >
        {options.map(el => {
          return (
            <div className={s.RadioAndLabel} key={el.value}>
              <div className={isDisabled ? s.RadioGroupDisabled : s.radioGroupContainer}>
                <RadioGroup.Item className={s.RadioGroupItem} id={el.value} value={el.value}>
                  <RadioGroup.Indicator className={s.RadioGroupIndicator} />
                </RadioGroup.Item>
              </div>
              <label
                className={`${s.Label} ${isDisabled ? s.LabelDisabled : ''}`}
                htmlFor={el.value}
              >
                {el.label}
              </label>
            </div>
          )
        })}
      </RadioGroup.Root>
    </form>
  )
}
