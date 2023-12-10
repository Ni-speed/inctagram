import { Profile, TAG_THREE, TAG_TWO } from './tags'
import { baseQueryWithReauth } from './basseQueryWithReauth'
import { GET_ME } from './tags'
import { createApi } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
  reducerPath: 'baseApi',
  tagTypes: [GET_ME, Profile],
})
