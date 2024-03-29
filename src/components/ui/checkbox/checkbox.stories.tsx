import type { Meta, StoryObj } from '@storybook/react'

import { CheckBox } from './'

const meta = {
  component: CheckBox,
  tags: ['autodocs'],
  title: 'Components/Checkbox',
} satisfies Meta<typeof CheckBox>

export default meta
type Story = StoryObj<typeof meta>

export const CheckboxDisabledChecked: Story = {
  args: {
    checked: true,
    disabled: true,
    labelText: undefined,
  },
}
export const CheckboxDisabled: Story = {
  args: {
    disabled: true,
    labelText: undefined,
  },
}

export const CheckboxWithLabel: Story = {
  args: {
    disabled: false,
    labelText: 'Check-box',
  },
}
