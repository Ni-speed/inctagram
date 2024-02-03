import { useDispatch } from 'react-redux'

import { AppDispatch } from './appStore'

export const useAppDispatch = () => useDispatch<AppDispatch>()
