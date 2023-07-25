import { setLightMode, setDarkMode } from './themeReducer'
import { AppThunk } from '~/store'

export const fetchModeAction = (): AppThunk => (dispatch, getState) => {
    const mode = localStorage.getItem('mode')
    if (mode && mode === 'dark') {
        dispatch(setDarkMode())
    } else {
        dispatch(setLightMode())
    }
}

export const lightModeAction = (): AppThunk => (dispatch, getState) => {
    dispatch(setLightMode())
    localStorage.setItem('mode', 'light')
}

export const darkModeAction = (): AppThunk => (dispatch, getState) => {
    dispatch(setDarkMode())
    localStorage.setItem('mode', 'dark')
}
