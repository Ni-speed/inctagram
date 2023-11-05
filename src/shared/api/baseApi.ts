import { TAG_ONE, TAG_THREE, TAG_TWO } from './tags'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://inctagram-tau.vercel.app/api/',
    credentials: 'include',
  }), // baseQueryWithReauth,

  endpoints: () => ({}),
  reducerPath: 'baseApi',
  tagTypes: [TAG_ONE, TAG_TWO, TAG_THREE],
})
