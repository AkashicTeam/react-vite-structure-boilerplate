import { Typography } from '@mui/material'
import { enqueueSnackbar } from 'notistack'
import { useState } from 'react'
import { fetchToken, onMessageListener } from '~/firebase-config'

export default function LoginPage() {
    const [isTokenFound, setTokenFound] = useState(false)
    console.log('Helloooooooadsasdas asdasd ')
    console.log('Hellooooooo243234324')
    fetchToken(setTokenFound)
    onMessageListener()
        .then((payload: any) => {
            enqueueSnackbar(payload.notification.title, { variant: 'success' })
        })
        .catch((err) => console.log('failed: ', err))

    return (
        <>
            {isTokenFound ? (
                <Typography variant='body1'>Notification permission enabled</Typography>
            ) : (
                <Typography variant='body1'>Need notification permission</Typography>
            )}
        </>
    )
}
