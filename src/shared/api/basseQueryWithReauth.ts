import {
  type BaseQueryFn,
  type FetchArgs,
  type FetchBaseQueryError,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query'
import { Mutex } from 'async-mutex'

const mutex = new Mutex()
const baseQuery = fetchBaseQuery({
  baseUrl: 'https://inctagram-tau.vercel.app/api/v1/',
  credentials: 'include',
  //   prepareHeaders: (headers, { getState }) => {
  //     // Добавляем нужные заголовки
  //     headers.set('Authorization', `Bearer ${getState().auth.token}`)

  //     return headers
  //   },
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI5Mzk4ODM5Mi03YWEyLTQzMzItOWEyNS0wOGU1YTAzOTcwMWYiLCJpZCI6ImIzMGE0YjMyLWYxYmEtNDI1MC05NmQwLWI2MDY0MTI3MjlhYSIsImlwIjoiMTI3LjAuMC4xIiwidGl0bGUiOiJNb3ppbGxhLzUuMCAoV2luZG93cyBOVCAxMC4wOyBXaW42NDsgeDY0KSBBcHBsZVdlYktpdC81MzcuMzYgKEtIVE1MLCBsaWtlIEdlY2tvKSBDaHJvbWUvMTE5LjAuMC4wIFNhZmFyaS81MzcuMzYiLCJpYXQiOjE3MDA1MTc1MjMsImV4cCI6MTAxNzAwNTE3NTIzfQ.tVkFfA1cXaeRw3hSkNEqPq8kO34q96OJBtxq-jMOK8M',
  },
  // build
})

export const baseQueryWithReauth: BaseQueryFn<
  FetchArgs | string,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  await mutex.waitForUnlock()
  let result = await baseQuery(args, api, extraOptions)

  if (result.error && result.error.status === 401) {
    if (!mutex.isLocked()) {
      const release = await mutex.acquire()

      try {
        const refreshResult = await baseQuery(
          { method: 'POST', url: '/auth/refresh-token' },
          api,
          extraOptions
        )

        if (refreshResult.meta?.response?.status === 204) {
          result = await baseQuery(args, api, extraOptions)
        } else {
          console.log('Error')
        }
      } finally {
        release()
      }
    } else {
      await mutex.waitForUnlock()
      result = await baseQuery(args, api, extraOptions)
    }
  }

  return result
}
