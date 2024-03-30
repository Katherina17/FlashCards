import type { Meta, StoryObj } from '@storybook/react'

import { CustomRadioGroup } from './'

const meta = {
  argTypes: {},
  component: CustomRadioGroup,
  tags: ['autodocs'],
  title: 'Components/RadioGroup',
} satisfies Meta<typeof CustomRadioGroup>

export default meta
type Story = StoryObj<typeof meta>

export const CustomCheckBox: Story = {
  args: {
    options: [
      { label: 'orange', value: 'efef' },
      { label: 'milk', value: 'wfwfew' },
      { label: 'potato', value: 'evdvdv' },
    ],
  },
}

export const DisabledCustomCheckBox: Story = {
  args: {
    disabled: true,
    options: [
      { label: 'orange', value: 'efef' },
      { label: 'milk', value: 'wfwfew' },
      { label: 'potato', value: 'evdvdv' },
    ],
  },
}
