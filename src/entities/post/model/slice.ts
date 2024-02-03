import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export type PhotosState = Array<PhotoType>
export type PhotoType = { aspect: number; id: string; src: string }

const initialState = { currentPhoto: {} as PhotoType, photos: [] as PhotosState }

export const photosSlice = createSlice({
  initialState,
  name: 'photos',
  reducers: {
    addPhoto(state, action: PayloadAction<PhotoType>) {
      const index = state.photos.findIndex(photo => photo.id === action.payload.id)

      if (index >= 0) {
        state.photos.splice(index, 1, action.payload)
      } else {
        state.photos.push(action.payload)
      }
      state.currentPhoto = action.payload
    },
    changeCurrentPhoto(state, action: PayloadAction<{ src: string }>) {
      state.currentPhoto = {
        ...state.currentPhoto,
        src: action.payload.src,
      }
    },
    deletePhoto(state, action: PayloadAction<{ id: string }>) {
      const index = state.photos.findIndex(photo => photo.id === action.payload.id)

      if (state.photos[index - 1]) {
        state.currentPhoto = state.photos[index - 1]
      } else if (state.photos[index + 1]) {
        state.currentPhoto = state.photos[index + 1]
      } else {
        state.currentPhoto = {} as PhotoType
      }
      state.photos.splice(index, 1)
    },
    setCurrentPhoto(state, action: PayloadAction<{ id: string }>) {
      const photo = state.photos.find(photo => photo.id === action.payload.id)

      if (photo) {
        state.currentPhoto = photo
      }
    },
  },
})

export const { addPhoto, changeCurrentPhoto, deletePhoto, setCurrentPhoto } = photosSlice.actions
