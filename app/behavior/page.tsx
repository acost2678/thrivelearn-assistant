import ABCForm from '@/components/ABCForm'

export default function Behavior(){
  return (
    <main className="max-w-2xl mx-auto p-6 space-y-4">
      <div className="card">
        <div className="h2 mb-2">ABC Quick-Log</div>
        <p className="muted">Use neutral, observable language. No labels, motives, or diagnoses.</p>
      </div>
      <ABCForm />
    </main>
  )
}
