import BigButton from '@/components/BigButton'

export default function Dashboard(){
  return (
    <main className="max-w-5xl mx-auto p-6 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <BigButton href="/behavior" title="ABC Quick-Log" subtitle="3 taps while teaching" />
        <BigButton href="/comms" title="Parent Comms" subtitle="Authentic, brief drafts" />
        <BigButton href="/meeting" title="Meeting Prep" subtitle="One-pager in minutes" />
      </div>
    </main>
  )
}
