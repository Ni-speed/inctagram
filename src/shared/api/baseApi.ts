import { baseQueryWithReauth } from './basseQueryWithReauth'
import { GET_ME, PROFILE, USERS } from './tags'
import { createApi } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
  reducerPath: 'baseApi',
  tagTypes: [GET_ME, PROFILE, USERS],
})
