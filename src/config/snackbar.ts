import { SnackbarProviderProps } from 'notistack'

const config: SnackbarProviderProps = {
    maxSnack: 3,
    anchorOrigin: {
        horizontal: 'left',
        vertical: 'bottom'
    }
}

export default config
