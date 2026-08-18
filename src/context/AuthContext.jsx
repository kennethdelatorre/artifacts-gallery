import { createContext, useContext, useState } from 'react'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem('ag_user')
    return stored ? JSON.parse(stored) : null
  })

  const login = async (email, password) => {
    const users = JSON.parse(localStorage.getItem('ag_users') || '[]')
    const found = users.find(
      (u) => u.email === email && u.password === password,
    )
    if (!found) throw new Error('Invalid credentials')
    localStorage.setItem('ag_user', JSON.stringify(found))
    setUser(found)
  }

  const logout = () => {
    localStorage.removeItem('ag_user')
    setUser(null)
  }

  return (
    <AuthContext.Provider
      value={{ user, login, logout, isAuthenticated: !!user, isLoading: false }}
    >
      {children}
    </AuthContext.Provider>
  )
}

/* eslint-disable react-refresh/only-export-components */
export function useAuth() {
  return useContext(AuthContext)
}
/* eslint-enable react-refresh/only-export-components */