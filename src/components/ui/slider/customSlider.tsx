import { useState } from 'react'

import * as Slider from '@radix-ui/react-slider'

import s from './slider.module.scss'

type PropsType = {
  defaultValue: number
  maxValue: number
}

export const CustomSlider = ({ defaultValue, maxValue }: PropsType) => {
  const [firstValue, setFirstValue] = useState(defaultValue)
  const [secondValue, setSecondValue] = useState(maxValue)

  const onValueChangeHandler = (value: number[]) => {
    setFirstValue(value[0])
    setSecondValue(value[1])
  }

  return (
    <div className={s.SliderCOntainer}>
      {' '}
      <p className={s.valueContainer}>{firstValue}</p>
      <Slider.Root
        className={s.SliderRoot}
        defaultValue={[defaultValue, maxValue]}
        max={maxValue}
        onValueChange={value => onValueChangeHandler(value)}
        step={1}
      >
        <Slider.Track className={s.SliderTrack}>
          <Slider.Range className={s.SliderRange} />
        </Slider.Track>
        <Slider.Thumb aria-label={'Volume'} className={s.SliderThumb} />
        <Slider.Thumb aria-label={'Volume'} className={s.SliderThumb} />
      </Slider.Root>
      <p className={s.valueContainer}>{secondValue}</p>
    </div>
  )
}
