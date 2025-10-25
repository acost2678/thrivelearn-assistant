import AuthGate from '@/components/AuthGate'

export default function Home(){
  return (
    <AuthGate>
      <main className="max-w-4xl mx-auto p-6 space-y-6">
        <div className="card">
          <h1 className="h1 mb-2">Thrive & Learn Assistant</h1>
          <p className="muted">Time-saving tools grounded in evidence. You remain in control.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <a href="/dashboard" className="button text-center">Open Dashboard</a>
        </div>
      </main>
    </AuthGate>
  )
}
