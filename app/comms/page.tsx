import CommComposer from '@/components/CommComposer'

export default function Comms(){
  return (
    <main className="max-w-3xl mx-auto p-6 space-y-4">
      <div className="card">
        <div className="h2 mb-2">Parent Communication</div>
        <p className="muted">Strengths-first, authentic, two-way partnership.</p>
      </div>
      <CommComposer />
    </main>
  )
}
