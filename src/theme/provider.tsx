import { CssBaseline, ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material'
import { useMemo } from 'react'
import getDesignTokens from '.'

export function Providers({ children }: { children: React.ReactNode }) {
    const theme = useMemo(() => responsiveFontSizes(createTheme(getDesignTokens('light'))), ['light'])
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    )
}
