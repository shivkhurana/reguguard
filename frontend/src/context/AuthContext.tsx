import React, { createContext, useContext, useState } from 'react'
import axios from 'axios'

type AuthContextType = {
  token: string | null
  roles: string[]
  login: (username: string, password: string) => Promise<void>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function useAuth() { const ctx = useContext(AuthContext); if (!ctx) throw new Error('useAuth'); return ctx }

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useState<string | null>(null)
  const [roles, setRoles] = useState<string[]>([])

  axios.interceptors.request.use(config => {
    if (token) config.headers = { ...config.headers, Authorization: `Bearer ${token}` }
    return config
  })

  async function login(username: string, password: string) {
    const res = await axios.post('http://localhost:8080/api/auth/login', { username, password })
    setToken(res.data.token)
    setRoles(res.data.roles || [])
  }

  function logout() { setToken(null); setRoles([]) }

  return <AuthContext.Provider value={{ token, roles, login, logout }}>{children}</AuthContext.Provider>
}
