import type { Meta, StoryObj } from '@storybook/react'

import { CustomTabs } from '@/components/ui/tabs/tabs'

const meta = {
  argTypes: {},
  component: CustomTabs,
  tags: ['autodocs'],
  title: 'Components/Tabs',
} satisfies Meta<typeof CustomTabs>

export default meta
type Story = StoryObj<typeof meta>

export const Tabs: Story = {
  args: {
    label: 'Switcher',
    orientation: 'horizontal',
    variant: 'leftBorder',
  },
}
export const DisabledTabs: Story = {
  args: {
    disable: true,
    label: 'Switcher',
    orientation: 'horizontal',
    variant: 'leftBorder',
  },
}

export const EmptyLeftBorderRightTabs: Story = {
  args: {
    label: 'Switcher',
    orientation: 'horizontal',
    variant: 'emptyLeftBorderRight',
  },
}

export const EmptyLeftTabs: Story = {
  args: {
    label: 'Switcher',
    orientation: 'horizontal',
    variant: 'emptyLeft',
  },
}

export const RightBorderTabs: Story = {
  args: {
    label: 'Switcher',
    orientation: 'horizontal',
    variant: 'rightBorder',
  },
}
export const PrimaryTabs: Story = {
  args: {
    label: 'Switcher',
    orientation: 'horizontal',
    variant: 'primary',
  },
}
