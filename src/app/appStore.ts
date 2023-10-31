import { baseApi, errorCatchingMiddleware } from '../shared/api'
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(baseApi.middleware).concat(errorCatchingMiddleware),
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
  },
})

setupListeners(store.dispatch)
