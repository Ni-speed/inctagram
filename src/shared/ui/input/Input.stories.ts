import { Input } from '@/shared/ui'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {
    disabled: {
      options: [true, false],
    },
    inputIsSearch: {
      options: [true, false],
    },
    inputType: {
      options: ['text', 'password'],
    },
    value: {
      options: 'string',
    },
  },
  component: Input,
  title: 'Components/Input',
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const InputStandard: Story = {
  args: {
    inputIsSearch: false,
    inputName: 'Input',
    inputType: 'text',
    value: '',
  },
}

export const InputStandardError: Story = {
  args: {
    errorMessage: 'Error!',
    inputIsSearch: false,
    inputName: 'Error',
    inputType: 'text',
    value: '',
  },
}

export const InputLogin: Story = {
  args: {
    inputIsSearch: false,
    inputName: 'Input',
    inputType: 'text',
    placeholder: 'Enter login',
    value: '',
  },
}

export const InputLoginError: Story = {
  args: {
    errorMessage: 'Error!',
    inputIsSearch: false,
    inputName: 'Input',
    inputType: 'text',
    value: '',
  },
}

export const InputSearch: Story = {
  args: {
    inputIsSearch: true,
    inputType: 'text',
    placeholder: 'Enter text',
    value: '',
  },
}

export const InputSearchError: Story = {
  args: {
    errorMessage: 'Error!',
    inputIsSearch: true,
    inputType: 'text',
    value: '',
  },
}

export const InputPassword: Story = {
  args: {
    inputIsSearch: false,
    inputName: 'Input',
    inputType: 'password',
    value: '',
  },
}

export const InputPasswordError: Story = {
  args: {
    errorMessage: 'Error!',
    inputIsSearch: false,
    inputName: 'Input',
    inputType: 'password',
    placeholder: 'Enter password',
    value: '',
  },
}
