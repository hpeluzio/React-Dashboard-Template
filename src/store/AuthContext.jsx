import React, { createContext, useState, useContext } from 'react'

const AuthContext = createContext()

export default function AuthProvider({ children }) {
    const [auth, setAuth] = useState({
        logado: false,
        token: '',
    })
    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const { auth, setAuth } = useContext(AuthContext)
    return { auth, setAuth }
}
