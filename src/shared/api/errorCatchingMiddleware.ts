import { toast } from 'react-toastify'

import { type Middleware, isRejectedWithValue } from '@reduxjs/toolkit'

export const errorCatchingMiddleware: Middleware = () => next => action => {
  if (isRejectedWithValue(action)) {
    action.payload.data.message !== 'Unauthorized' && toast.error(action.payload.data.message)
  }

  return next(action)
}
