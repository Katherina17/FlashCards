import type { Meta, StoryObj } from '@storybook/react'

import ArrowIcon from '@/assets/svg/buttonArrow/buttonArrow.svg'

import { Button } from './'

const meta = {
  argTypes: {
    title: {
      control: { type: 'text' },
    },
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary', 'tertiary', 'link'],
    },
  },
  component: Button,
  tags: ['autodocs'],
  title: 'Components/Button',
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    as: 'button',
    children: 'Button primary',
    disabled: false,
    variant: 'primary',
  },
}

export const PrimaryWithIcon: Story = {
  args: {
    as: 'button',
    children: (
      <>
        <img alt={'arrow svg element'} src={ArrowIcon} /> Button primary{' '}
      </>
    ),
    disabled: false,
    text: 'primary with icon',
    variant: 'primary',
  },
}
export const SecondaryWithIcon: Story = {
  args: {
    as: 'button',
    children: (
      <>
        <img alt={'arrow svg element'} src={ArrowIcon} /> Button{' '}
      </>
    ),
    disabled: false,
    text: 'secondary with icon',
    variant: 'secondary',
  },
}

export const Secondary: Story = {
  args: {
    as: 'button',
    children: 'Button Secondary',
    disabled: false,
    variant: 'secondary',
  },
}

export const FullWidth: Story = {
  args: {
    as: 'button',
    children: 'Full Width Primary Button',
    disabled: false,
    fullWidth: true,
    variant: 'primary',
  },
}

export const AsLink: Story = {
  args: {
    as: 'a',
    children: 'Link that looks like a button',
    variant: 'primary',
  },
}
