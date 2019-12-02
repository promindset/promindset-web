import { configure } from '@storybook/react'

configure(require.context('../app', true, /\.stories\.js$/), module)
