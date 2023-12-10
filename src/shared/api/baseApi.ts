import { Profile, TAG_THREE, TAG_TWO } from './tags'
import { baseQueryWithReauth } from '@/shared'
import { createApi } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
  reducerPath: 'baseApi',
  tagTypes: [Profile],
})
