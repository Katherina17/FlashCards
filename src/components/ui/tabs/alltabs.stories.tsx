import type { Meta, StoryObj } from '@storybook/react'

import { AllTab } from '@/components/ui/tabs/AllTabs'

const meta = {
  argTypes: {},
  component: AllTab,
  tags: ['autodocs'],
  title: 'Components/Tabs',
} satisfies Meta<typeof AllTab>

export default meta
type Story = StoryObj<typeof meta>

export const AllTabs: Story = {
  args: {},
}
