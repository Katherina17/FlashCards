import { ReactNode, useState } from 'react'

import * as Checkbox from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'
import { clsx } from 'clsx'

import s from './checkbox.module.scss'

type CheckboxProps = {
  checked?: boolean
  disabled?: boolean
  labelText: ReactNode
}

export const CheckBox = (props: CheckboxProps) => {
  const [checked, setChecked] = useState(props.checked)

  return (
    <div style={{ alignItems: 'center', display: 'flex', gap: '1px' }}>
      <div
        className={clsx({
          [s.CheckboxRootContainer]: !props.disabled,
          [s.CheckboxRootContainerDisabled]: props.disabled,
        })}
      >
        <Checkbox.Root
          checked={checked}
          className={`${s.CheckboxRoot} ${checked ? s.CheckboxRootChecked : ''}`}
          disabled={props.disabled}
          onCheckedChange={() => setChecked(!checked)}
        >
          <Checkbox.Indicator className={s.CheckboxIndicator}>
            <CheckIcon />
          </Checkbox.Indicator>
        </Checkbox.Root>
      </div>
      {props.labelText && <label className={s.labelText}> {props.labelText}</label>}
    </div>
  )
}
