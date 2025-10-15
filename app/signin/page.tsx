"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { signIn } from "next-auth/react"

export default function SignInPage() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    const res = await signIn("credentials", { redirect: false, username, password })
    setLoading(false)
    if (res && !res.error) {
      router.push('/')
    } else {
      alert('登入失敗')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={onSubmit} className="w-full max-w-md p-6 bg-white rounded shadow">
        <h2 className="text-2xl font-bold mb-4">Sign in</h2>
        <label className="block mb-2">Username</label>
        <input className="w-full mb-4 p-2 border" value={username} onChange={(e) => setUsername(e.target.value)} />
        <label className="block mb-2">Password</label>
        <input type="password" className="w-full mb-4 p-2 border" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button className="w-full p-2 bg-primary text-white" disabled={loading}>
          {loading ? 'Signing in...' : 'Sign in'}
        </button>
      </form>
    </div>
  )
}
