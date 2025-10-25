import { db } from './firebase'
import { collection, addDoc, query, where, getDocs, orderBy, limit, serverTimestamp } from 'firebase/firestore'

export const logBehavior = async (payload: any) => {
  const col = collection(db, 'behaviorEvents')
  return addDoc(col, { ...payload, createdAt: serverTimestamp() })
}

export const saveMessage = async (payload: any) => {
  const col = collection(db, 'messages')
  return addDoc(col, { ...payload, createdAt: serverTimestamp() })
}

export const recentBehaviorByStudent = async (studentId: string) => {
  const col = collection(db, 'behaviorEvents')
  const qy = query(col, where('studentId', '==', studentId), orderBy('createdAt', 'desc'), limit(25))
  const snap = await getDocs(qy)
  return snap.docs.map(d => ({ id: d.id, ...d.data() })) as any[]
}

export const recentMessagesByStudent = async (studentId: string) => {
  const col = collection(db, 'messages')
  const qy = query(col, where('studentId', '==', studentId), orderBy('createdAt', 'desc'), limit(25))
  const snap = await getDocs(qy)
  return snap.docs.map(d => ({ id: d.id, ...d.data() })) as any[]
}
