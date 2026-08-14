import React, { useState } from 'react'
import axios from 'axios'
import { useAuth } from '../context/AuthContext'

export default function Dashboard() {
  const { roles } = useAuth()
  const [volume, setVolume] = useState(0)
  const [errorRate, setErrorRate] = useState(0)
  const [result, setResult] = useState<any>(null)

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    try {
      const res = await axios.post('http://localhost:8080/api/v1/risk/evaluate', { transactionVolume: volume, errorRate })
      setResult(res.data)
    } catch (err:any) { setResult({ error: err?.response?.data || 'error' }) }
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl mb-4">Compliance Dashboard</h1>
      <div className="mb-4">Logged roles: {roles.join(', ')}</div>
      <form onSubmit={submit} className="space-y-2 mb-4">
        <div>
          <label>Transaction Volume</label>
          <input type="number" value={volume} onChange={e=>setVolume(Number(e.target.value))} className="border p-2 w-full" />
        </div>
        <div>
          <label>Error Rate (%)</label>
          <input type="number" value={errorRate} onChange={e=>setErrorRate(Number(e.target.value))} className="border p-2 w-full" />
        </div>
        <button className="bg-green-600 text-white px-4 py-2 rounded">Evaluate Risk</button>
      </form>
      {result && (
        <div className="bg-gray-100 p-4 rounded">
          <div><strong>Risk Level:</strong> {result.riskLevel}</div>
          <div><strong>Reason:</strong> {result.reason}</div>
        </div>
      )}
    </div>
  )
}
