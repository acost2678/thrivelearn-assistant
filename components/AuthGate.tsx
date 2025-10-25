'use client'
import { useEffect, useState } from 'react'
import { onUser, login } from '@/lib/auth'

export default function AuthGate({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<any>(null)
  useEffect(() => onUser(setUser), [])
  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="card max-w-md text-center">
          <h1 className="h1 mb-2">Thrive & Learn Assistant</h1>
          <p className="muted mb-4">Teacher-only access. Sign in with your school account.</p>
          <button className="button" onClick={login}>Sign in</button>
        </div>
      </div>
    )
  }
  return <>{children}</>
}
