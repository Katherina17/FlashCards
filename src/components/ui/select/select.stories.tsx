import type { Meta, StoryObj } from '@storybook/react'

import { CustomSelect } from '@/components/ui/select/CustomSelect'

const meta = {
  argTypes: {},
  component: CustomSelect,
  tags: ['autodocs'],
  title: 'Components/Select',
} satisfies Meta<typeof CustomSelect>

export default meta
type Story = StoryObj<typeof meta>

export const Select: Story = {
  args: {
    label: 'Select-box',
    options: [
      { label: 'orange', value: 'efef' },
      { label: 'milk', value: 'wfwfew' },
      { label: 'potato', value: 'evdvdv' },
    ],
    placeholder: 'select-box',
  },
}

export const SelectDisabled: Story = {
  args: {
    disabled: true,
    label: 'Select-box',
    options: [
      { label: 'orange', value: 'efef' },
      { label: 'milk', value: 'wfwfew' },
      { label: 'potato', value: 'evdvdv' },
    ],
    placeholder: 'select-box',
  },
}
