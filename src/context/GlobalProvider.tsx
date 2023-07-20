import { ReactNode, createContext } from 'react'

export const GlobalContext = createContext({})
type Props = {
    children?: ReactNode
}
const GlobalProvider = ({ children }: Props) => {
    return <GlobalContext.Provider value={{}}>{children}</GlobalContext.Provider>
}

export default GlobalProvider
