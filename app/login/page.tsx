'use client'
import { login } from '@/lib/auth'

export default function Login(){
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="card max-w-md text-center">
        <h1 className="h1 mb-2">Teacher Login</h1>
        <p className="muted mb-4">Use your school Google/Microsoft account</p>
        <button className="button" onClick={login}>Sign in</button>
      </div>
    </main>
  )
}
