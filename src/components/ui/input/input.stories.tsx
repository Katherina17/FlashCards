import type { Meta, StoryObj } from '@storybook/react'

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

export const InputTextDisabled: Story = {
  args: {
    disable: true,
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
    placeholder: 'Input search',
    variant: 'search',
  },
}

export const SearchInputError: Story = {
  args: {
    error: 'Error!',
    placeholder: 'Input search',
    variant: 'search',
  },
}
export const SearchInputDisabled: Story = {
  args: {
    disable: true,
    placeholder: 'Input search',
    variant: 'search',
  },
}
