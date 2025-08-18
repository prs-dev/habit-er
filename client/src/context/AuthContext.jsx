import { createContext, useState, useEffect } from "react";
import { userDetails } from "../services/api";

export const AuthContext = createContext({})

export const AuthContextProvider = ({children}) => {
    const [token, setToken] = useState(() => {
        const t = localStorage.getItem('token')
        if(t) {
            return t
        } else {
            return ''
        }
    })
    const [user, setUser] = useState(() => {
        const user = localStorage.getItem("item")
        if(user) {
            return JSON.parse(user)
        } else {
            return {}
        }
    })
    // useEffect(() => {
    //     const userData = JSON.parse(localStorage.getItem("user"))
    //     const tokenData = localStorage.getItem("token")
    //     setUser(userData)
    //     setToken(tokenData)
    // }, [])
    useEffect(() => {
        const handler = async() => {
            const res = await userDetails(token)
            // console.log("i am here")
            setUser(res?.user)
            localStorage.setItem("user", JSON.stringify(res?.user))
            localStorage.setItem("token", token)
            // console.log("token", res)
        }
        if(token) {
            handler()
        }
    }, [token])
    console.log(token, user)
    return <AuthContext.Provider value={{user, setToken, token}}>
        {children}
    </AuthContext.Provider>
}

