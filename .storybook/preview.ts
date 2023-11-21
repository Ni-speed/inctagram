import type { Preview } from '@storybook/react'
import '@/styles/index.scss'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'dark',
          value: '#0D0D0D',
        },
        {
          name: 'light',
          value: '#fff',
        },
      ],
    },
  },
}

export default preview
