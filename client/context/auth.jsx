// context hook kullanımı
// import { createContext } from "react";
// AuthContext = createContext()
// const AuthProvider = () => {
//
// }

import { useState, useEffect, createContext } from 'react'

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    user: null,
    token: '',
  })

  useEffect(
    (auth) => {
      if (localStorage.getItem('auth')) {
        setAuth(JSON.parse(localStorage.getItem('auth')))
      }
    },
    [auth]
  )

  return <AuthContext.Provider value={[auth, setAuth]}>{children}</AuthContext.Provider>
}

export { AuthContext, AuthProvider }
