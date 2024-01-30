import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type PhotosState = Array<{ id: string; src: string }>

const initialState = [] as PhotosState

export const photosSlice = createSlice({
  initialState,
  name: 'photos',
  reducers: {
    addPhoto(state, action: PayloadAction<{ id: string; src: string }>) {
      state.map((photo, index) => {
        if (photo.id === action.payload.id) {
          state.splice(index, 1, action.payload)
        } else {
          state.push(action.payload)
        }
      })
    },
  },
})

export const { addPhoto } = photosSlice.actions
