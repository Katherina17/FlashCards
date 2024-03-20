import type { Meta, StoryObj } from '@storybook/react'

import ArrowIcon from '@/assets/svg/buttonArrow/buttonArrow.svg'

import { Input } from './'

const meta = {
  argTypes: {
    title: {
      control: { type: 'text' },
    },
    variant: {
      control: { type: 'radio' },
      options: ['password', 'search', 'text'],
    },
  },
  component: Input,
  tags: ['autodocs'],
  title: 'Components/Input',
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const InputText: Story = {
  args: {
    label: 'Input',
    placeholder: 'Input',
    variant: 'text',
  },
}

export const InputTextError: Story = {
  args: {
    error: 'Error!',
    label: 'Input',
    placeholder: 'Error',
    variant: 'text',
  },
}

export const InputPassword: Story = {
  args: {
    label: 'Input',
    placeholder: 'Input',
    variant: 'password',
  },
}
export const SearchInput: Story = {
  args: {
    children: (
      <>
        <img alt={'arrow svg element'} src={ArrowIcon} /> Button{' '}
      </>
    ),
    text: 'secondary with icon',
    variant: 'search',
  },
}
