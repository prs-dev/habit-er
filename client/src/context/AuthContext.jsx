import { createContext, useState, useEffect } from "react";
import { userDetails } from "../services/api";

export const AuthContext = createContext({})

export const AuthContextProvider = ({children}) => {
    const [token, setToken] = useState('')
    const [user, setUser] = useState(null)
    useEffect(() => {
        const handler = async() => {
            const res = await userDetails(token)
            setUser(res?.user)
            // console.log("token", res)
        }
        handler()
    }, [token])
    console.log(token, user)
    return <AuthContext.Provider value={{user, setToken}}>
        {children}
    </AuthContext.Provider>
}

