import type { Meta, StoryObj } from '@storybook/react'

import { CustomSlider } from '@/components/ui/slider/customSlider'

const meta = {
  argTypes: {},
  component: CustomSlider,
  tags: ['autodocs'],
  title: 'Components/Slider',
} satisfies Meta<typeof CustomSlider>

export default meta
type Story = StoryObj<typeof meta>

export const Slider: Story = {
  args: {
    defaultValue: 10,
    maxValue: 200,
  },
}
