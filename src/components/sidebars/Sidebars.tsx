import { HomeIcon } from '../../../public/icons/index'

import s from './Sidebar.module.scss'

export const Sidebars = () => {
  const sidebarsItems = [
    {
      callbackHandler: () => {
        console.log('Hi 1')
      },
      iconUrl: HomeIcon,
      id: 1,
      title: 'Home',
    },
    {
      callbackHandler: () => {
        console.log('Hi 2')
      },
      iconUrl: HomeIcon,
      id: 2,
      title: 'Create',
    },
    {
      callbackHandler: () => {
        console.log('Hi 3')
      },
      iconUrl: HomeIcon,
      id: 3,
      title: 'My Profile',
    },
  ]

  return <div></div>
}
