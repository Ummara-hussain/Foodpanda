import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  theme: '',
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    updateTheme: (state, data) => {
      state.theme = data.payload
    }
  },
})

export const { updateTheme } = themeSlice.actions

export default themeSlice.reducer