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

export const Primary: Story = {
  args: {},
}
