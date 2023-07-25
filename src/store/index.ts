import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counter/counterReducer'
import { userApi } from './services/userApi'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import themeReducer from './features/theme/themeReducer'
export const store = configureStore({
    reducer: { counterReducer, [userApi.reducerPath]: userApi.reducer, themeReducer },
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({}).concat([userApi.middleware])
})
setupListeners(store.dispatch)
export type AppThunk = ThunkAction<void, RootState, unknown, Action>
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
