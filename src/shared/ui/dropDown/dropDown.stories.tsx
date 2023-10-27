import { Typography } from '..'
import { BallNotification } from '../../../entities/user/ui'
import { Button } from '../button'
import { DropDown } from './DropDown'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: DropDown,
  tags: ['autodocs'],
  title: 'Components/DropDown',
} satisfies Meta<typeof DropDown>

export default meta
type Story = StoryObj<typeof meta>

export const DropDownMenu: Story = {
  args: {
    items: [
      'sdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdf',
      'sdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdf',
      'sdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdf',
      'sdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdf',
    ],
    modal: true,
    trigger: (
      <div style={{ display: 'inline-block', height: '20px' }}>
        <BallNotification countNotification={5}></BallNotification>
      </div>
    ),
  },
}
