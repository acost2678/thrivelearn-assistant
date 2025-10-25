'use client'
import { useState } from 'react'
import { recentBehaviorByStudent, recentMessagesByStudent } from '@/lib/db'

export default function MeetingPacket(){
  const [studentId, setStudentId] = useState('')
  const [packet, setPacket] = useState<any>(null)

  const build = async () => {
    const behavior = await recentBehaviorByStudent(studentId)
    const messages = await recentMessagesByStudent(studentId)
    setPacket({ behavior, messages })
  }

  return (
    <div className="space-y-3">
      <input className="card" placeholder="Student ID (local code)" value={studentId} onChange={e=>setStudentId(e.target.value)} />
      <button className="button" onClick={build}>Build 5-min Packet</button>
      {packet && (
        <div className="card">
          <div className="h2 mb-2">One-page Summary</div>
          <h3 className="font-semibold">Recent Observations (ABC)</h3>
          <ul className="list-disc pl-6 mb-3">
            {packet.behavior.map((b:any)=> (
              <li key={b.id}>{b.antecedent} → <strong>{b.behavior}</strong> → {b.consequence}</li>
            ))}
          </ul>
          <h3 className="font-semibold">Recent Family Communications</h3>
          <ul className="list-disc pl-6">
            {packet.messages.map((m:any)=> (
              <li key={m.id}><em>{m.scenario}</em> draft saved</li>
            ))}
          </ul>
          <p className="muted mt-3">Note: This packet summarizes observations and drafts only; decisions remain with the teacher/IEP team.</p>
        </div>
      )}
    </div>
  )
}
