import { createContext } from "react";

export const AuthContext = createContext({})

export const AuthContextProvider = ({children}) => {
    return <AuthContext.Provider value={'test'}>
        {children}
    </AuthContext.Provider>
}

