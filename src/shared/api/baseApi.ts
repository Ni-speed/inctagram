import { baseQueryWithReauth } from './basseQueryWithReauth'
import { TAG_ONE, TAG_THREE, TAG_TWO } from './tags'
import { createApi } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
  reducerPath: 'baseApi',
  tagTypes: [TAG_ONE, TAG_TWO, TAG_THREE],
})
