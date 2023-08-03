import { setLightMode, setDarkMode } from './themeReducer'
import { AppThunk } from '~/store'

export const fetchModeAction = (): AppThunk => (dispatch) => {
    const mode = localStorage.getItem('mode')
    if (mode && mode === 'dark') {
        dispatch(setDarkMode())
    } else {
        dispatch(setLightMode())
    }
}

export const lightModeAction = (): AppThunk => (dispatch) => {
    dispatch(setLightMode())
    localStorage.setItem('mode', 'light')
}

export const darkModeAction = (): AppThunk => (dispatch) => {
    dispatch(setDarkMode())
    localStorage.setItem('mode', 'dark')
}
