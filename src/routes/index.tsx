import { RouteObject, createBrowserRouter } from 'react-router-dom'
import path from './path'
import LoginPage from '../pages/login'
type TArrRouteObject = RouteObject[]

const Routes: TArrRouteObject = [
    {
        path: path.LOGIN_PATH,
        element: <LoginPage />
    }
]

const router = createBrowserRouter([...Routes])

export default router
