'use client'
import { useState } from 'react'
import { scenarios, draftForScenario } from '@/lib/templates'
import { authenticityChecklist } from '@/lib/policy'
import { saveMessage } from '@/lib/db'

export default function CommComposer(){
  const [scenario, setScenario] = useState('celebration')
  const [studentId, setStudentId] = useState('')
  const [familyName, setFamilyName] = useState('there')
  const [detail, setDetail] = useState('')
  const [nextStep, setNextStep] = useState('')
  const draft = draftForScenario(scenario, { studentName: 'your student', familyName, detail, nextStep })

  const save = async () => {
    await saveMessage({ studentId, scenario, draft, channel: 'email' })
    alert('Saved draft.')
  }

  return (
    <div className="space-y-3">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <select className="card" value={scenario} onChange={e=>setScenario(e.target.value)}>
          {scenarios.map(s=> <option key={s.key} value={s.key}>{s.label}</option>)}
        </select>
        <input className="card" placeholder="Student ID (local code)" value={studentId} onChange={e=>setStudentId(e.target.value)} />
        <input className="card" placeholder="Family name ("there" ok)" value={familyName} onChange={e=>setFamilyName(e.target.value)} />
      </div>
      <textarea className="card w-full min-h-[140px]" placeholder="Specific detail (what you saw/heard)" value={detail} onChange={e=>setDetail(e.target.value)} />
      <input className="card w-full" placeholder="School next step (if any)" value={nextStep} onChange={e=>setNextStep(e.target.value)} />
      <div className="card">
        <div className="h2 mb-2">Draft</div>
        <pre className="whitespace-pre-wrap">{draft}</pre>
      </div>
      <div className="card">
        <div className="h2 mb-2">Authenticity checklist</div>
        <ul className="list-disc pl-6">
          {authenticityChecklist.map(i=> <li key={i}>{i}</li>)}
        </ul>
      </div>
      <button className="button" onClick={save}>Save Draft</button>
    </div>
  )
}
