import { useEffect, useState } from 'react'
import { auth } from '../firebase'

export default function ProtectedPage() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        setUser(user)
      } else {
        // redirect to login page
      }
    })

    return unsubscribe
  }, [])

  return (
    <div>
      {user ? <h1>Welcome, {user.displayName}</h1> : <p>Loading...</p>}
    </div>
  )
}
