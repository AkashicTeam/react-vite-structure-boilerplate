import { GlobalProvider } from './context'
import { SnackbarProvider } from 'notistack'
import router from './routes'
import { RouterProvider } from 'react-router-dom'
import { Providers as ThemeProvider } from './theme/provider'
import { store } from './store'
import { Provider } from 'react-redux'
import { SnackbarConfig } from './config'

function App() {
    return (
        <Provider store={store}>
            <GlobalProvider>
                <ThemeProvider>
                    <SnackbarProvider {...SnackbarConfig}>
                        <RouterProvider router={router} />
                    </SnackbarProvider>
                </ThemeProvider>
            </GlobalProvider>
        </Provider>
    )
}

export default App
