import { photosSlice } from '@/entities'
import { baseApi } from '@/shared'
import { combineReducers } from '@reduxjs/toolkit'

export const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  [photosSlice.name]: photosSlice.reducer,
})
