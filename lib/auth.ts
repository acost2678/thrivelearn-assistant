import { auth, provider } from './firebase'
import { signInWithPopup, signOut, onAuthStateChanged, type User } from 'firebase/auth'

export const login = async () => signInWithPopup(auth, provider)
export const logout = async () => signOut(auth)
export const onUser = (cb: (u: User | null) => void) => onAuthStateChanged(auth, cb)
