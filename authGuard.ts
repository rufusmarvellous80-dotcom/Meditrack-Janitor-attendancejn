// Simple client-side role fetcher example
import { db } from './firebase'
import { ref, get } from 'firebase/database'

export async function fetchUserRoles(uid:string){
  const snapshot = await get(ref(db, 'roles/' + uid))
  return snapshot.exists() ? snapshot.val() : null
}
