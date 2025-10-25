'use client'
import { useForm } from 'react-hook-form'
import { antecedents, behaviors, consequences } from '@/lib/observables'
import { logBehavior } from '@/lib/db'

export default function ABCForm() {
  const { register, handleSubmit, reset } = useForm()
  const onSubmit = async (data: any) => {
    await logBehavior({
      studentId: data.studentId,
      antecedent: data.antecedent,
      behavior: data.behavior,
      consequence: data.consequence,
      intensity: data.intensity ?? 'low',
      notes: (data.notes || '').slice(0, 200)
    })
    reset()
    alert('Logged.')
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
      <input className="card w-full" placeholder="Student ID (local code)" {...register('studentId', { required: true })} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <select className="card" {...register('antecedent', { required: true })}>
          <option value="">Antecedent</option>
          {antecedents.map(a => <option key={a}>{a}</option>)}
        </select>
        <select className="card" {...register('behavior', { required: true })}>
          <option value="">Behavior (observable)</option>
          {behaviors.map(b => <option key={b}>{b}</option>)}
        </select>
        <select className="card" {...register('consequence', { required: true })}>
          <option value="">Consequence</option>
          {consequences.map(c => <option key={c}>{c}</option>)}
        </select>
      </div>
      <select className="card" {...register('intensity')}>
        <option value="low">Intensity: low</option>
        <option value="moderate">Intensity: moderate</option>
        <option value="high">Intensity: high</option>
      </select>
      <textarea className="card w-full" placeholder="Optional, neutral notes (≤200 chars)" {...register('notes')} />
      <button className="button" type="submit">Save (3 taps)</button>
    </form>
  )
}
