import { Meta, StoryObj } from '@storybook/react'

import { Card } from './Card'

const meta = {
  component: Card,
  tags: ['autodocs'],
  title: 'Components/Card',
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const CardBlock: Story = {
  args: {
    children: (
      <>
        <Card>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aspernatur consectetur
          dicta dolore doloremque doloribus eius fuga incidunt, minus neque, perferendis quam quis
          quod recusandae repellat reprehenderit repudiandae sapiente suscipit.
        </Card>
      </>
    ),
  },
}
