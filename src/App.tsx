import { GlobalProvider } from './context'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { SnackbarProvider } from 'notistack'
import router from './routes'
import { RouterProvider } from 'react-router-dom'

function App() {
    return (
        <GlobalProvider>
            <SnackbarProvider maxSnack={3} anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}>
                <ThemeProvider theme={''}>
                    <CssBaseline />
                    <RouterProvider router={router} />
                </ThemeProvider>
            </SnackbarProvider>
        </GlobalProvider>
    )
}

export default App
