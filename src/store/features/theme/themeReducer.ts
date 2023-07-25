import { createSlice } from '@reduxjs/toolkit'
type TMode = 'light' | 'dark'
type TTheme = {
    mode: TMode
}
const initialState: TTheme = {
    mode: 'light'
}
const themeSlide = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setLightMode(state) {
            state.mode = 'light'
        },
        setDarkMode(state) {
            state.mode = 'dark'
        }
    }
})

export const { setDarkMode, setLightMode } = themeSlide.actions
export default themeSlide.reducer
