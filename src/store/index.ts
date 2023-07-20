import { configureStore, Action } from '@reduxjs/toolkit'
import thunk, { ThunkAction } from 'redux-thunk'
import rootReducer, { RootState } from './rootReducer'

const middlewares = [thunk]
const store = configureStore({
    reducer: rootReducer,
    middleware: middlewares
})
export type AppDispatch = typeof store.dispatch<any>
export type AppThunk = ThunkAction<void, RootState, unknown, Action>

export type TAction = {
    type: string
    payload: object
}

export default store
