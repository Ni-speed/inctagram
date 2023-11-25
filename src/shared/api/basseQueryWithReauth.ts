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
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI5YTExMzc1Mi0yNmMwLTQwMmMtOTZmNC02NWVlOTkzNDlhYmEiLCJpZCI6ImFjMDAzYjBmLWJjYmYtNDRiZi1iNTc3LWViNzBmMWYwZjZhOCIsImlwIjoiMTI3LjAuMC4xIiwidGl0bGUiOiJNb3ppbGxhLzUuMCAoV2luZG93cyBOVCAxMC4wOyBXaW42NDsgeDY0KSBBcHBsZVdlYktpdC81MzcuMzYgKEtIVE1MLCBsaWtlIEdlY2tvKSBDaHJvbWUvMTE5LjAuMC4wIFNhZmFyaS81MzcuMzYiLCJpYXQiOjE3MDA2NjkxMjIsImV4cCI6MTAxNzAwNjY5MTIyfQ.Rf-fIVGPjXxefjYijjUUVbXYsxN1iA9yB_m132kmwLc',
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
