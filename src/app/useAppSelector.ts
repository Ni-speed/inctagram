import { TypedUseSelectorHook, useSelector } from 'react-redux'

import { RootState } from './appStore'

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
