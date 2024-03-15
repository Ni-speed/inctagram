import { createApi } from '@reduxjs/toolkit/query/react'

import { baseQueryWithReauth } from './basseQueryWithReauth'
import { GET_ME, PROFILE, USERS } from './tags'

export const baseApi = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
  reducerPath: 'baseApi',
  tagTypes: [GET_ME, PROFILE, USERS],
})
