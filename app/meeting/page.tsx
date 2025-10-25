import MeetingPacket from '@/components/MeetingPacket'

export default function Meeting(){
  return (
    <main className="max-w-3xl mx-auto p-6 space-y-4">
      <div className="card">
        <div className="h2 mb-2">Meeting Prep</div>
        <p className="muted">Summaries support planning; decisions remain with the teacher/IEP team.</p>
      </div>
      <MeetingPacket />
    </main>
  )
}
