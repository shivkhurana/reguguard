import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const auth = useAuth()
  const nav = useNavigate()

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    try { await auth.login(username, password); nav('/dashboard') } catch (err:any) { setError(err?.response?.data || 'Login failed') }
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={submit} className="p-6 bg-white rounded shadow w-full max-w-md">
        <h2 className="text-xl mb-4">ReguGuard Login</h2>
        {error && <div className="text-red-600">{String(error)}</div>}
        <input className="border p-2 w-full mb-2" placeholder="Username" value={username} onChange={e=>setUsername(e.target.value)} />
        <input className="border p-2 w-full mb-2" placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Login</button>
      </form>
    </div>
  )
}
